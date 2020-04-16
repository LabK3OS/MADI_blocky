'use strict';

goog.provide('Blockly.Blocks.TIME');  // Deprecated
goog.provide('Blockly.Constants.TIME');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


//esperar N segundos
Blockly.Blocks['esperar'] = {
  init: function() {
    this.appendValueInput("Esperar Segundos")
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
    this.appendValueInput("Esperar milisegundos")
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
    this.appendValueInput("Esperar microsegundos")
        .setCheck("Number")
        .appendField("Esperar us");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['conf_rtc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("Fecha"), "rtc");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['set_date'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("Establecer Fecha a");
    this.appendDummyInput()
        .appendField("Año")
        .appendField(new Blockly.FieldNumber(2020, 2015, 10000, 1), "Ano")
        .appendField("Mes")
        .appendField(new Blockly.FieldDropdown([
          ["Enero","1"],
          ["Febrero","2"],
          ["Marzo","3"],
          ["Abril","4"],
          ["Mayo","5"],
          ["Junio","6"],
          ["Julio","7"],
          ["Agosto","8"],
          ["Septiembre","9"],
          ["Octubre","10"],
          ["Noviembre","11"],
          ["Diciembre","12"]
        ]), "Mes")
        .appendField("Dia")
        .appendField(new Blockly.FieldNumber(1, 1, 31, 1), "Dia");
    this.appendDummyInput()
        .appendField("Hora")
        .appendField(new Blockly.FieldNumber(0, 0, 23, 1), "Hora")
        .appendField("Minuto")
        .appendField(new Blockly.FieldNumber(0, 0, 60, 1), "Minuto")
        .appendField("Segundo")
        .appendField(new Blockly.FieldNumber(0, 0, 60, 1), "Segundo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read_rtc'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("Leer Fecha");
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
