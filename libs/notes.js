'use strict';
const minimist = require('minimist');
/**
 * @constructor
 * Creates the Input object based on CL inputs
 */
function Input() {
  const args = minimist(process.argv.slice(2));
  this.action = this.getFlag(Object.keys(args)[1]);
  this.payload = Object.values(args)[1];
  console.log(this);
  this.action && this.payload ? this.execute(this) : console.log('error');
} 
/**
 * Tests flag to see if it matches available methods
 * @param {String} flag 
 * @returns {String} returns input or console logs error
 */
Input.prototype.getFlag = (flag) => {
  const test = /a|add/;
  return test.test(flag) ? 'add' : console.log('not valid') ;
};
/**
 * Runs action method for the new input
 * @param {Object} obj 
 */
Input.prototype.execute = function(obj) {
  const { action } = obj;
  obj[action](this);
};
/**
 * Adds the new note 
 * @param {Object} obj 
 */
Input.prototype.add = (obj) => {
  console.log('HERE', obj.payload);
  const note = {
    ID: Date.now(),
    note: obj.payload,
  };
  console.log(`Adding note: ${note.note}`);
};

module.exports = Input;
