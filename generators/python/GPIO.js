'use strict';

goog.provide('Blockly.Python.GPIO');

goog.require('Blockly.Python');

Blockly.Python['pin'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from machine import Pin\n';
  return code;
};

Blockly.Python['gpio_in'] = function(block) {
  var dropdown_resistor = block.getFieldValue('Resistor');
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('Name'), Blockly.Variables.NAME_TYPE);
  var value_num_pin = Blockly.Python.valueToCode(block, 'NUM_PIN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '+dropdown_resistor+';
	if(block.getFieldValue('Resistor') == "WITHOUT") {
	 code = 'from machine import Pin\n'+variable_name+'=Pin('+value_num_pin+', Pin.IN)\n'; 
	}
	else {
	 code = ''+variable_name+'=Pin('+value_num_pin+', Pin.IN,Pin.PULL_'+dropdown_resistor+')\n';
	}
  return code;
};

Blockly.Python['gpio_out'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('Name'), Blockly.Variables.NAME_TYPE);
  var value_num_pin = Blockly.Python.valueToCode(block, 'NUM_PIN', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+variable_name+'=Pin('+value_num_pin+', Pin.OUT)\n';
  return code;
};

Blockly.Python['value_out'] = function(block) {
  var dropdown_value = block.getFieldValue('Value');
  var value_pin = Blockly.Python.valueToCode(block, 'Pin', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
	if(dropdown_value=="H")	{
	code=''+value_pin+'.value(1)\n';
	}
	else {
	code=''+value_pin+'.value(0)\n';
	}
  return code;
};
