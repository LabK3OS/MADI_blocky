'use strict';

goog.provide('Blockly.JavaScript.TOUCH');

goog.require('Blockly.JavaScript');



Blockly.JavaScript['touch_pin'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['read_touch'] = function(block) {
  var value_read = Blockly.JavaScript.valueToCode(block, 'Read', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['conf_touch'] = function(block) {
  var value_config = Blockly.JavaScript.valueToCode(block, 'Config', Blockly.JavaScript.ORDER_ATOMIC);
  var number_value = block.getFieldValue('Value');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
