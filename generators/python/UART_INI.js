'use strict';

goog.provide('Blockly.Python.UART_INI');

goog.require('Blockly.Python');

Blockly.Python['uart_ini'] = function(block) {
  var variable_uart = Blockly.Python.variableDB_.getName(block.getFieldValue('UART'), Blockly.Variables.NAME_TYPE);
  var checkbox_parity = block.getFieldValue('Parity') == 'TRUE';
  var checkbox_stop = block.getFieldValue('Stop') == 'TRUE';
  var value_identify = Blockly.Python.valueToCode(block, 'Identify', Blockly.Python.ORDER_ATOMIC);
  var value_bits = Blockly.Python.valueToCode(block, 'Bits', Blockly.Python.ORDER_ATOMIC);
  var value_baudrate = Blockly.Python.valueToCode(block, 'Baudrate', Blockly.Python.ORDER_ATOMIC);
  var value_pinstx = Blockly.Python.valueToCode(block, 'Pinstx', Blockly.Python.ORDER_ATOMIC);
  var value_pinsrx = Blockly.Python.valueToCode(block, 'Pinsrx', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'hola_mundo\n';
	var Parity
	if (checkbox_parity == true ) {
		Parity = '1';
	}
	else {
		Parity = 'None';
	}
	var Stop
	if (checkbox_stop == true ) {
		Stop = '1';
	}
	else {
		Stop = 'None';
	}
	code = 'from machine import UART\n'+variable_uart+' = UART('+value_identify+')\n'+variable_uart+'.init(baudrate='+value_baudrate+', bits='+value_bits+', parity='+Parity+', stop='+Stop+', pins=('+value_pinstx+', '+value_pinsrx+'))';
  return code;
};

Blockly.Python['read'] = function(block) {
  var value_read = Blockly.Python.valueToCode(block, 'Read', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+value_read+'.read()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_n'] = function(block) {
  var value_read = Blockly.Python.valueToCode(block, 'Read', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+value_read+'.read('+value_name+')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['write'] = function(block) {
  var value_uart = Blockly.Python.valueToCode(block, 'Uart', Blockly.Python.ORDER_ATOMIC);
  var value_write = Blockly.Python.valueToCode(block, 'Write', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+value_uart+'.write('+value_write+')\n';
  return code;
};
