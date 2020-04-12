'use strict';

goog.provide('Blockly.JavaScript.GPIO');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['pin_in'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_resistor = block.getFieldValue('Resistor');
  var dropdown_pin = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pin_out'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['value_out'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'Pin', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_value = block.getFieldValue('Value');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['value_in'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
