
'use strict';

goog.provide('Blockly.JavaScript.TIME');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['tiempo'] = function(block) {

  return '\n';

};

Blockly.JavaScript['esperar'] = function(block) {
  var value_esperar = Blockly.JavaScript.valueToCode(block, 'Esperar', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  value_esperar=value_esperar*1000;
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
