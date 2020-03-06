'use strict';

goog.provide('Blockly.Python.Notas');

goog.require('Blockly.Python');


Blockly.Python['play_sound'] = function(block) {
  var dropdown_value = block.getFieldValue('VALUE');
  // TODO: Assemble Python into code variable.
  var dropdown_tiempo = block.getFieldValue('Tiempo');
  var code = '...\n';
  return code;
};
