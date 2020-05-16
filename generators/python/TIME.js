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
  Blockly.Python.definitions_['import_ntp'] = 'import ntptime';
  var code = 'ntptime.settime()\n' + variable_rtc + ' = RTC()\n';
  return code;
};

Blockly.Python['act_fecha'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '(y34r,m0nth,md4y,w33k0fy34r,h0ur,m1nut3,s3c0nd,m1l1s3cond)=' + value_variable + '.datetime()\n' + value_variable + '.datetime((y34r,m0nth,md4y,w33k0fy34r,h0ur-5,m1nut3,s3c0nd,m1l1s3cond))\n';
  return code;
};


Blockly.Python['read_rtc'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.datetime()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['separar_fecha'] = function(block) {
  var dropdown_opcion = block.getFieldValue('opcion');
  var value_arreglo = Blockly.Python.valueToCode(block, 'arreglo', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_arreglo + '[' + dropdown_opcion + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['timer_create'] = function(block) {
  var variable_variable = Blockly.Python.variableDB_.getName(block.getFieldValue('Variable'), Blockly.Variables.NAME_TYPE);
  var number_timer = block.getFieldValue('timer');
  var dropdown_modo = block.getFieldValue('Modo');
  var number_periodo = block.getFieldValue('Periodo');
  var value_funcion = Blockly.Python.valueToCode(block, 'Funcion', Blockly.Python.ORDER_ATOMIC);
  value_funcion = value_funcion.slice(1,-1);
  value_funcion = value_funcion.replace(new RegExp(" ","g"),"_");
  Blockly.Python.definitions_['import_timer'] = 'from machine import Timer';
  // TODO: Assemble Python into code variable.
  var code = variable_variable + ' = Timer(' + number_timer + ')\n' + variable_variable + '.init(period=' + number_periodo +', mode=Timer.' + dropdown_modo + ', callback=lambda t:' + value_funcion + '())\n';
  return code;
};



Blockly.Python['stop_timer'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'Variable', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + '.deinit()\n';
  return code;
};


// https://www.esploradores.com/micropython_rtc/
