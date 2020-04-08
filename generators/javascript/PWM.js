'use strict';

goog.provide('Blockly.JavaScript.PWM');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['pwm_pin'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['conf_pwm'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  var number_freq = block.getFieldValue('Freq');
  var number_duty = block.getFieldValue('Duty');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['stop_pwm'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
