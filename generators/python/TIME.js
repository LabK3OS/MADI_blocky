'use strict';

goog.provide('Blockly.Python.TIME');

goog.require('Blockly.Python');


Blockly.Python['esperar'] = function(block) {
  var value_esperar = Blockly.Python.valueToCode(block, 'Esperar', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep(' + value_esperar + ')\n';
  return code;
};

Blockly.Python['esperar_ms'] = function(block) {
  var value_esperar_ms = Blockly.Python.valueToCode(block, 'Esperar_ms', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(' + value_esperar_ms + ')\n';
  return code;
};

Blockly.Python['esperar_us'] = function(block) {
  var value_esperar_us = Blockly.Python.valueToCode(block, 'Esperar_us', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_us(' + value_esperar_us + ')\n';
  return code;
};

Blockly.Python['conf_rtc'] = function(block) {
  var variable_rtc = Blockly.Python.variableDB_.getName(block.getFieldValue('rtc'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_rtc'] = 'from machine import RTC';
  var code = variable_rtc + ' = RTC()\n';
  return code;
};

Blockly.Python['set_date'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  var number_ano = block.getFieldValue('Ano');
  var dropdown_mes = block.getFieldValue('Mes');
  var number_dia = block.getFieldValue('Dia');
  var number_hora = block.getFieldValue('Hora');
  var number_minuto = block.getFieldValue('Minuto');
  var number_segundo = block.getFieldValue('Segundo');
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.date((' + number_ano + ', ' + dropdown_mes + ', ' + number_dia + ', ' + number_hora + ', ' + number_minuto + ', ' + number_segundo + ', 0, 0))\n';
  return code;
};

Blockly.Python['read_rtc'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.datetime()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
