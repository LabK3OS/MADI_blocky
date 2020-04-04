'use strict';

goog.provide('Blockly.Blocks.TIME');  // Deprecated
goog.provide('Blockly.Constants.TIME');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['tiempo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importar Tiempo");
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//esperar N segundos
Blockly.Blocks['esperar'] = {
  init: function() {
    this.appendValueInput("Esperar")
        .setCheck("Number")
        .appendField("Esperar");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//esperar N milisegundos

Blockly.Blocks['esperar_ms'] = {
  init: function() {
    this.appendValueInput("Esperar_ms")
        .setCheck("Number")
        .appendField("Esperar ms");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//esperar N microsegundos

Blockly.Blocks['esperar_us'] = {
  init: function() {
    this.appendValueInput("Esperar_us")
        .setCheck("Number")
        .appendField("Esperar us");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
