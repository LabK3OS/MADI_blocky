'use strict';

goog.provide('Blockly.Python.TOUCH');

goog.require('Blockly.Python');


Blockly.Python['touch_pin'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  Blockly.Python.definitions_['import_touch'] = 'from machine import TouchPad';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  var dropdown_pin = block.getFieldValue('Pin');
  // TODO: Assemble Python into code variable.
  var code = variable_variable + '= TouchPad(Pin(' + dropdown_pin + '))\n';
  return code;
};


Blockly.Python['read_touch'] = function(block) {
  var value_read = Blockly.Python.valueToCode(block, 'Read', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+value_read+'.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['conf_touch'] = function(block) {
  var value_config = Blockly.Python.valueToCode(block, 'Config', Blockly.Python.ORDER_ATOMIC);
  var number_value = block.getFieldValue('Value');
  // TODO: Assemble Python into code variable.
  var code = value_config + '.config(' + number_value + ')\n';
  return code;
};
