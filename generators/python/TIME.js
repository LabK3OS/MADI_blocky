'use strict';

goog.provide('Blockly.Python.TIME');

goog.require('Blockly.Python');


Blockly.Python['esperar'] = function(block) {
  var value_esperar = Blockly.Python.valueToCode(block, 'Esperar', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_esperar+')\n';
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
