'use strict';

goog.provide('Blockly.JavaScript.NEO');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['pin_neo'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  var number_can = block.getFieldValue('Can');
  // TODO: Assemble JavaScript into code variable.
  var code = 'guardador_de_pines(' + dropdown_pin + ');\n';
  return code;
};
