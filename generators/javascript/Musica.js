
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


Blockly.JavaScript['sonidos'] = function(block) {
  var dropdown_instrumento = block.getFieldValue('Instrumento');
  var value_porcentaje = Blockly.JavaScript.valueToCode(block, 'porcentaje', Blockly.JavaScript.ORDER_ATOMIC);
  var functionName = Blockly.JavaScript.provideFunction_(
      'por_sonido',
      ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '() {',
        '  var num = Math.floor(Math.random() * Math.pow(2, 24));',
        '  return \'#\' + (\'00000\' + num.toString(16)).substr(-6);',
        '}']);
  // TODO: Assemble JavaScript into code variable.
  var dropdown_tempo = 0.5;
  dropdown_instrumento = parseInt(dropdown_instrumento);
  value_porcentaje = parseFloat(value_porcentaje)/100;
  if(value_porcentaje>1)
  {
    value_porcentaje=1;
  }
  else if(value_porcentaje<0)
  {
    value_porcentaje=0;
  }
  switch (dropdown_instrumento)
  {
    case 0:
      var tipo = "\"sine\"";
      var frecuencia = ((247-65)*value_porcentaje)+65;
    break;
    case 1:
      var tipo = "\"sine\"";
      var frecuencia = ((2093-262)*value_porcentaje)+262;
    break;
    case 2:
      var tipo = "\"triangle\"";
      var frecuencia = ((2093-262)*value_porcentaje)+262;
    break;
    case 3:
      var tipo = "\"triangle\"";
      var frecuencia = ((247-65)*value_porcentaje)+65;
    break;
    case 4:
      var tipo = "\"sawtooth\"";
      var frecuencia = ((2093-65)*value_porcentaje)+65;
    break;
  }
  return 'MusicMaker(' + Math.round(frecuencia) + ',' + dropdown_tempo + ', ' + tipo + ');\nsleepi(' + dropdown_tempo + ');\n';
};

Blockly.JavaScript['parar_sonido'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
