'use strict';

goog.provide('Blockly.Python.MPU6050');

goog.require('Blockly.Python');




Blockly.Python['i2c_mpu'] = function(block) {
  var dropdown_scl = block.getFieldValue('SCL');
  var dropdown_sda = block.getFieldValue('SDA');
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  Blockly.Python.definitions_['import_mpu'] = 'import mpu6050';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import I2C';
  // TODO: Assemble Python into code variable.
  var code = 'i2c = I2C(scl=Pin(' + dropdown_scl + '), sda=Pin(' + dropdown_sda + '))\n' + variable_variable + ' = mpu6050.accel(i2c)\n';
  return code;
};


Blockly.Python['read_mpu'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.get_values()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
