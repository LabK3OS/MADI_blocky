'use strict';

goog.provide('Blockly.Python.GPIO');

goog.require('Blockly.Python');

Blockly.Python['pin_in'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_resistor = block.getFieldValue('Resistor');
  var dropdown_pin = block.getFieldValue('Pin');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  // TODO: Assemble Python into code variable.
  var code = '+dropdown_resistor+';
  if(block.getFieldValue('Resistor') == "WITHOUT") {
	 code = variable_variable+'=Pin('+dropdown_pin+', Pin.IN)\n';
	}
	else {
	 code = variable_variable+'=Pin('+dropdown_pin+', Pin.IN,Pin.PULL_'+dropdown_resistor+')\n';
	}
  return code;
};


Blockly.Python['pin_out'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var dropdown_pin = block.getFieldValue('Pin');
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  // TODO: Assemble Python into code variable.
  var code = variable_variable+'=Pin('+dropdown_pin+', Pin.OUT)\n';
  return code;
};


Blockly.Python['value_out'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'Pin', Blockly.Python.ORDER_ATOMIC);
  var dropdown_value = block.getFieldValue('Value');
  // TODO: Assemble Python into code variable.
  var code = value_pin+'.value(' + dropdown_value + ')\n';
  return code;
};


Blockly.Python['value_in'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'Value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_value+'.value()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['irq_pin'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  var dropdown_trigger = block.getFieldValue('trigger');
  var value_funcion = Blockly.Python.valueToCode(block, 'funcion', Blockly.Python.ORDER_ATOMIC);
  value_funcion = value_funcion.slice(1,-1);
  value_funcion = value_funcion.replace(new RegExp(" ","g"),"_");
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.irq(trigger=Pin.' + dropdown_trigger + ', handler=' + value_funcion + ')\n';
  return code;
};


Blockly.Python['irq_on_off'] = function(block) {
  var dropdown_interruptor = block.getFieldValue('interruptor');
  // TODO: Assemble Python into code variable.
  var code = dropdown_interruptor + '\n';
  return code;
};
