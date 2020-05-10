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
var pausa = 31250

  var code = 'musica_1.freq(' + dropdown_nota + ')\nmusica_1.duty(512)\ntime.sleep_us(' + dropdown_name +')\nmusica_1.deinit()\ntime.sleep_us(' + pausa +')\n';
  return code;
};
