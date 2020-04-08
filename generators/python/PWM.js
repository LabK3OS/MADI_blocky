'use strict';

goog.provide('Blockly.Python.PWM');

goog.require('Blockly.Python');


Blockly.Python['pwm_pin'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  // TODO: Assemble Python into code variable.
  var code = variable_variable + ' = PWM(Pin(' + dropdown_pin + '))\n';
  return code;
};


Blockly.Python['conf_pwm'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  var number_freq = block.getFieldValue('Freq');
  var number_duty = block.getFieldValue('Duty');
  // TODO: Assemble Python into code variable.
  number_duty=Math.round((number_duty*1023)/100);
  var code = value_variable + '.freq(' + number_freq + ')\n' + value_variable + '.duty(' + number_duty + ')\n';
  return code;
};


Blockly.Python['stop_pwm'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.deinit()\n';
  return code;
};
