'use strict';

goog.provide('Blockly.JavaScript.GPIO');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['pin_in'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_resistor = block.getFieldValue('Resistor');
  var dropdown_pin = block.getFieldValue('Pin');
  Blockly.JavaScript.definitions_['iniciador'] = 'iniciador_de_pines()';
  // TODO: Assemble JavaScript into code variable.
  var code = 'guardador_de_pines(' + dropdown_pin + ');\n';
  return code;
};

Blockly.JavaScript['pin_out'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  Blockly.JavaScript.definitions_['iniciador'] = 'iniciador_de_pines()';
  // TODO: Assemble JavaScript into code variable.
  var code = 'guardador_de_pines(' + dropdown_pin + ');\n';
  return code;
};

Blockly.JavaScript['value_out'] = function(block) {
  var value_pin = Blockly.JavaScript.valueToCode(block, 'Pin', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_value = block.getFieldValue('Value');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['value_in'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'Value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['irq_pin'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_trigger = block.getFieldValue('trigger');
  var value_funcion = Blockly.JavaScript.valueToCode(block, 'funcion', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['irq_on_off'] = function(block) {
  var dropdown_interruptor = block.getFieldValue('interruptor');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
