'use strict';

goog.provide('Blockly.JavaScript.TOUCH');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['import_touch'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['touch_pin'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
