
'use strict';

goog.provide('Blockly.JavaScript.TIME');

goog.require('Blockly.JavaScript');



Blockly.JavaScript['esperar'] = function(block) {
  var value_esperar = Blockly.JavaScript.valueToCode(block, 'Esperar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  value_esperar=parseInt(value_esperar)*1000;
  var code = 'sleepi(' + value_esperar + ');\n';
  return code;
};

Blockly.JavaScript['esperar_ms'] = function(block) {
  var value_esperar_ms = Blockly.JavaScript.valueToCode(block, 'Esperar_ms', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'sleepi(' + value_esperar_ms + ');\n';
  return code;
};

Blockly.JavaScript['esperar_us'] = function(block) {
  var value_esperar_us = Blockly.JavaScript.valueToCode(block, 'Esperar_us', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  value_esperar_us=parseFloat(value_esperar_us)/1000;
  var code = 'sleepi(' + value_esperar_us + ');\n';
  return code;
};

Blockly.JavaScript['conf_rtc'] = function(block) {
  var variable_rtc = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('rtc'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['set_date'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  var number_ano = block.getFieldValue('Ano');
  var dropdown_mes = block.getFieldValue('Mes');
  var number_dia = block.getFieldValue('Dia');
  var number_hora = block.getFieldValue('Hora');
  var number_minuto = block.getFieldValue('Minuto');
  var number_segundo = block.getFieldValue('Segundo');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['read_rtc'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['separar_fecha'] = function(block) {
  var dropdown_opcion = block.getFieldValue('opcion');
  var value_arreglo = Blockly.JavaScript.valueToCode(block, 'arreglo', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['timer_create'] = function(block) {
  var variable_variable = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var number_timer = block.getFieldValue('timer');
  var dropdown_modo = block.getFieldValue('Modo');
  var number_periodo = block.getFieldValue('Periodo');
  var value_funcion = Blockly.JavaScript.valueToCode(block, 'Funcion', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


Blockly.JavaScript['stop_timer'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'Variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
