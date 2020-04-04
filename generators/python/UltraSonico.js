'use strict';

goog.provide('Blockly.Python.UltraSonico');

goog.require('Blockly.Python');


Blockly.Python['hc_sr04'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from hcsr04 import HCSR04\n';
  return code;
};


Blockly.Python['sensor_ultrasonico'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('Sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_trig = block.getFieldValue('Trig');
  var dropdown_echo = block.getFieldValue('Echo');
  // TODO: Assemble Python into code variable.
  var code = variable_sensor + ' = HCSR04(trigger_pin=' + dropdown_trig + ', echo_pin=' + dropdown_echo + ')\n';
  return code;
};



Blockly.Python['distancia_ultrasonico'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + '.distance_cm()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
