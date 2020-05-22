'use strict';

goog.provide('Blockly.Python.Musica');

goog.require('Blockly.Python');


Blockly.Python['Musica'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_name = block.getFieldValue('Tempo');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_pwm'] = 'from machine import PWM';
  Blockly.Python.definitions_['import_musica'] = 'musica_1 = PWM(Pin(12))';
  // TODO: Assemble Python into code variable.
dropdown_name = (1000000 * parseFloat(dropdown_name)-31250);
var pausa = 31250;

  var code = 'musica_1.freq(' + dropdown_nota + ')\nmusica_1.duty(512)\ntime.sleep_us(' + dropdown_name +')\nmusica_1.deinit()\ntime.sleep_us(' + pausa +')\n';
  return code;
};


Blockly.Python['bajo'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dac'] = 'from machine import DAC';
  Blockly.Python.definitions_['import_musica'] = 'dac0=DAC(Pin(25))';
  // TODO: Assemble Python into code variable.
  dropdown_tempo =(1000* parseFloat(dropdown_tempo)-20);
  var pausa = 20;
  var code = 'dac0.waveform(' + dropdown_nota + ',SINE,' + dropdown_tempo + ')\ntime.sleep_ms(' + pausa +')\n';
  return code;
};


Blockly.Python['piano'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dac'] = 'from machine import DAC';
  Blockly.Python.definitions_['import_musica'] = 'dac0=DAC(Pin(25))';
  // TODO: Assemble Python into code variable.
  dropdown_tempo =(1000* parseFloat(dropdown_tempo)-20);
  var pausa = 20;
  var code = 'dac0.waveform(' + dropdown_nota + ',SINE,' + dropdown_tempo + ')\ntime.sleep_ms(' + pausa +')\n';
  return code;
};



Blockly.Python['xilofono'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dac'] = 'from machine import DAC';
  Blockly.Python.definitions_['import_musica'] = 'dac0=DAC(Pin(25))';
  // TODO: Assemble Python into code variable.
  dropdown_tempo =(1000* parseFloat(dropdown_tempo)-20);
  var pausa = 20;
  var code = 'dac0.waveform(' + dropdown_nota + ',TRIANGLE,' + dropdown_tempo + ')\ntime.sleep_ms(' + pausa +')\n';
  return code;
};


Blockly.Python['percusion'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dac'] = 'from machine import DAC';
  Blockly.Python.definitions_['import_musica'] = 'dac0=DAC(Pin(25))';
  // TODO: Assemble Python into code variable.
  dropdown_tempo =(1000* parseFloat(dropdown_tempo)-20);
  var pausa = 20;
  var code = 'dac0.waveform(' + dropdown_nota + ',TRIANGLE,' + dropdown_tempo + ')\ntime.sleep_ms(' + pausa +')\n';
  return code;
};


Blockly.Python['guitarra'] = function(block) {
  var dropdown_nota = block.getFieldValue('Nota');
  var dropdown_tempo = block.getFieldValue('Tempo');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dac'] = 'from machine import DAC';
  Blockly.Python.definitions_['import_musica'] = 'dac0=DAC(Pin(25))';
  // TODO: Assemble Python into code variable.
  dropdown_tempo =(1000* parseFloat(dropdown_tempo)-20);
  var pausa = 20;
  var code = 'dac0.waveform(' + dropdown_nota + ',SAWTOOTH,' + dropdown_tempo + ')\ntime.sleep_ms(' + pausa +')\n';
  return code;
};


Blockly.Python['sonidos'] = function(block) {
  var dropdown_instrumento = block.getFieldValue('Instrumento');
  var value_porcentaje = Blockly.Python.valueToCode(block, 'porcentaje', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_pin'] = 'from machine import Pin';
  Blockly.Python.definitions_['import_dac'] = 'from machine import DAC';
  Blockly.Python.definitions_['import_musica'] = 'dac0=DAC(Pin(25))';
  Blockly.Python.definitions_['import_math'] = 'import math';
  // TODO: Assemble Python into code variable.
  var functionName = Blockly.Python.provideFunction_(
      'por_sonido',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(p,t):',
       '  if p>100:',
       '    p=100',
       '  elif p<0:',
       '    p=0',
       '  if t==0:',
       '    fre=round(((247-65)*p/100)+65)',
       '  elif t==1:',
       '    fre=round(((2093-262)*p/100)+262)',
       '  elif t==2:',
       '    fre=round(((2093-262)*p/100)+262)',
       '  elif t==3:',
       '    fre=round(((247-65)*p/100)+65)',
       '  elif t==4:',
       '    fre=round(((2093-65)*p/100)+65)',
       '  return (fre)']);

  dropdown_instrumento = parseInt(dropdown_instrumento);
  switch (dropdown_instrumento)
  {
    case 0:
      var tipo = "SINE";
    break;
    case 1:
      var tipo = "SINE";
    break;
    case 2:
      var tipo = "TRIANGLE";
    break;
    case 3:
      var tipo = "TRIANGLE";
    break;
    case 4:
      var tipo = "SAWTOOTH";
    break;
  }
  var code = 'dac0.waveform(' + functionName + '(' + value_porcentaje + ', ' + dropdown_instrumento + '),' + tipo + ')\n';
  return code;
};

Blockly.Python['parar_sonido'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'dac0.stopwave()\n';
  return code;
};
