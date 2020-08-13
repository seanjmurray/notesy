'use strict';
const minimist = require('minimist');
/**
 * Creates the Input object based on CL inputs
 * @constructor
 * @returns {Object} command : {action: String, payload: String}
 */
class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.getInput(args);
  }
  /**
   * Tests flag to see if it matches available methods
   * @param {Object} 
   * @returns {Object} returns command object
   */
  getInput(obj) {
    const argsMap = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
    };

    const category = obj.c || obj.category;

    let arg = Object.keys(obj).filter(arg => argsMap[arg])[0];

    const payload = typeof obj[arg] === 'string' ? obj[arg] : undefined ;

    const command = {
      action: argsMap[arg],
      payload: payload,
      category: category,
    };
    return command;
  }
  /**
   * @returns {Boolean}
   */
  valid() {
    if (!this.command.action) { return false; }
    if (this.command.action == 'add') {
      if (!this.command.payload) {
        return false;
      }
    }
    if (this.command.action == 'delete') {
      if (!this.command.payload) {
        return false;
      }
    }

    return true;

  }
}


module.exports = Input;
