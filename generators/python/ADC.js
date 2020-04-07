'use strict';

goog.provide('Blockly.Python.ADC');

goog.require('Blockly.Python');


Blockly.Python['adc_pin'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_adc'] = 'from machine import ADC';
  // TODO: Assemble Python into code variable.
  var code = variable_variable + ' = ADC(Pin(' + dropdown_pin + '))\n' + variable_variable + '.atten(ADC.ATTN_11DB)\n';
  return code;
};


Blockly.Python['read_adc'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_value + '.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
