'use strict';

goog.provide('Blockly.Python.TOUCH');

goog.require('Blockly.Python');


Blockly.Python['import_touch'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from machine import TouchPad\n';
  return code;
};


Blockly.Python['touch_pin'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
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
  var value_value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+value_config+'.config('+value_value+')\n';
  return code;
};
