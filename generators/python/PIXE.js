'use strict';

goog.provide('Blockly.Python.PIXE');

goog.require('Blockly.Python');


Blockly.Python['pinpixel'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  var number_can = block.getFieldValue('Can');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_pinpixel'] = 'from neopixel import NeoPixel';
  // TODO: Assemble Python into code variable.
  var code = variable_variable + ' = NeoPixel(Pin(' + dropdown_pin + ', Pin.OUT),' + number_can + ')\n';
  return code;
};


Blockly.Python['setpixel'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  var value_numero = Blockly.Python.valueToCode(block, 'numero', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '[' + value_numero + '-1] = ' + value_color + '\n';
  return code;
};


Blockly.Python['enviarapixel'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.write()\n';
  return code;
};
