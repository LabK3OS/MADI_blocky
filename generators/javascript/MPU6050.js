
'use strict';

goog.provide('Blockly.JavaScript.MPU6050');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['import_mpu'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['i2c_mpu'] = function(block) {
  var dropdown_name = block.getFieldValue('SCL');
  var dropdown_name = block.getFieldValue('SDA');
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['read_mpu'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
