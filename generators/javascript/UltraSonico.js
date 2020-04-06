
'use strict';

goog.provide('Blockly.JavaScript.UltraSonico');

goog.require('Blockly.JavaScript');




Blockly.JavaScript['sensor_ultrasonico'] = function(block) {
  var variable_sensor = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_trig = block.getFieldValue('Trig');
  var dropdown_echo = block.getFieldValue('Echo');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['distancia_ultrasonico'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
