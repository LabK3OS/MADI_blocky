
'use strict';

goog.provide('Blockly.JavaScript.Musica');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['Musica'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_name = block.getFieldValue('Tempo');
  // TODO: Assemble JavaScript into code variable.
  return 'MusicMaker(' + dropdown_nota + ',' + dropdown_name + ');\nsleepi(' + dropdown_name + ');\n';
};


Blockly.JavaScript['bajo'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  // TODO: Assemble JavaScript into code variable.
  var tipo = "\"sine\"";
  return 'MusicMaker(' + dropdown_nota + ',' + dropdown_tempo + ', ' + tipo + ');\nsleepi(' + dropdown_tempo + ');\n';
};


Blockly.JavaScript['piano'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  // TODO: Assemble JavaScript into code variable.
  var tipo = "\"sine\"";
  return 'MusicMaker(' + dropdown_nota + ',' + dropdown_tempo + ', ' + tipo + ');\nsleepi(' + dropdown_tempo + ');\n';
};


Blockly.JavaScript['xilofono'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  // TODO: Assemble JavaScript into code variable.
  var tipo = "\"triangle\"";
  return 'MusicMaker(' + dropdown_nota + ',' + dropdown_tempo + ', ' + tipo + ');\nsleepi(' + dropdown_tempo + ');\n';
};

Blockly.JavaScript['percusion'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  // TODO: Assemble JavaScript into code variable.
  var tipo = "\"triangle\"";
  return 'MusicMaker(' + dropdown_nota + ',' + dropdown_tempo + ', ' + tipo + ');\nsleepi(' + dropdown_tempo + ');\n';
};


Blockly.JavaScript['guitarra'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  // TODO: Assemble JavaScript into code variable.
  var tipo = "\"sawtooth\"";
  return 'MusicMaker(' + dropdown_nota + ',' + dropdown_tempo + ', ' + tipo + ');\nsleepi(' + dropdown_tempo + ');\n';
};
