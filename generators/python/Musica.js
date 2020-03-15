'use strict';

goog.provide('Blockly.Python.Musica');

goog.require('Blockly.Python');


Blockly.Python['block_type'] = function(block) {
  var dropdown_nota = block.getFieldValue('Notas');
  var dropdown_name = block.getFieldValue('Tempo');
  var checkbox_name = block.getFieldValue('Combi') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
