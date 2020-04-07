

'use strict';

goog.provide('Blockly.JavaScript.ADC');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['adc_pin'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['read_adc'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
