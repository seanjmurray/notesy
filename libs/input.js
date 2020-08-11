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
    };
    let arg = Object.keys(obj).filter(arg => argsMap[arg])[0];
    const command = {
      action: argsMap[arg],
      payload: obj[arg],
    };
    return command;
  }
  /**
   * @returns {Boolean}
   */
  valid(){
    const { action, payload } = this.command;
    // Double negative first converts to boolean, then checks and returns boolean value 
    return !!(action && payload);
  }
}

module.exports = Input;
