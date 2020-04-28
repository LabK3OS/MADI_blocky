'use strict';

goog.provide('Blockly.Python.NEO');

goog.require('Blockly.Python');


Blockly.Python['pin_neo'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  var number_can = block.getFieldValue('Can');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_neo'] = 'from neopixel import NeoPixel';
  // TODO: Assemble Python into code variable.
  var code = variable_variable + ' = NeoPixel(Pin(' + dropdown_pin + ', Pin.OUT),' + number_can + ')\n';
  return code;
};
