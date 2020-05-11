
'use strict';

goog.provide('Blockly.JavaScript.MPU6050');

goog.require('Blockly.JavaScript');



Blockly.JavaScript['i2c_mpu'] = function(block) {
  var dropdown_scl = block.getFieldValue('SCL');
  var dropdown_sda = block.getFieldValue('SDA');
  Blockly.JavaScript.definitions_['iniciador'] = 'iniciador_de_pines()';
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'guardador_de_pines(' + dropdown_scl + ');\nguardador_de_pines(' + dropdown_sda + ');\n';
  return code;
};


Blockly.JavaScript['read_mpu'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['separar_mpu'] = function(block) {
  var dropdown_opcion = block.getFieldValue('opcion');
  var value_arreglo = Blockly.JavaScript.valueToCode(block, 'arreglo', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
