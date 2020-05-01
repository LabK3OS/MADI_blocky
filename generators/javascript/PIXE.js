'use strict';

goog.provide('Blockly.JavaScript.PIXE');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['pinpixel'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  var number_can = block.getFieldValue('Can');
  // TODO: Assemble JavaScript into code variable.
  var code = 'guardador_de_pines(' + dropdown_pin + ');\n';
  return code;
};


Blockly.JavaScript['setpixel'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numero = Blockly.JavaScript.valueToCode(block, 'numero', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['enviarapixel'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
