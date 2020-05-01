'use strict';

goog.provide('Blockly.JavaScript.NEOPIXE');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['neopin'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  var number_cantidad = block.getFieldValue('Cantidad');
  // TODO: Assemble JavaScript into code variable.
  var code = 'guardador_de_pines(' + dropdown_pin + ');\n';
  return code;
};


Blockly.JavaScript['neo_cual'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numero = Blockly.JavaScript.valueToCode(block, 'numero', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rgb = Blockly.JavaScript.valueToCode(block, 'rgb', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['escribir_neo'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
