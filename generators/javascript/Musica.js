
'use strict';

goog.provide('Blockly.JavaScript.Musica');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['Musica'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_name = block.getFieldValue('Tempo');
  var checkbox_name = block.getFieldValue('Combi') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  return 'MusicMaker(' + dropdown_nota + ',' + dropdown_name + ',' + checkbox_name + ');\nsleepi(' + dropdown_name + ');\n';
};
