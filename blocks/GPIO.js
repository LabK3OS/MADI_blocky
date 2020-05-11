
'use strict';

goog.provide('Blockly.Blocks.GPIO');  // Deprecated
goog.provide('Blockly.Constants.GPIO');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');



Blockly.Blocks['pin_in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("Entrada"), "Variable");
    this.appendDummyInput()
        .appendField("Resistencia")
        .appendField(new Blockly.FieldDropdown([
          ["Down","DOWN"],
          ["Up","UP"],
          ["Sin Resistencia","WITHOUT"]
        ]), "Resistor");
    this.appendDummyInput()
        .appendField("Pin De Entrada")
        .appendField(new Blockly.FieldDropdown([
          ["GPIO4","4"],
          ["GPIO12","12"],
          ["GPIO13","13"],
          ["GPIO14","14"],
          ["GPIO15","15"],
          ["GPIO25","25"],
          ["GPIO26","26"],
          ["GPIO27","27"],
          ["GPIO32","32"],
          ["GPIO33","33"],
          ["GPIO36","36"],
          ["GPIO37","37"],
          ["GPIO38","38"]
        ]), "Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(252);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pin_out'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("Salida"), "Variable");
    this.appendDummyInput()
        .appendField("Pin De Salida")
        .appendField(new Blockly.FieldDropdown([
          ["GPIO4","4"],
          ["GPIO12","12"],
          ["GPIO13","13"],
          ["GPIO14","14"],
          ["GPIO15","15"],
          ["GPIO25","25"],
          ["GPIO26","26"],
          ["GPIO27","27"],
          ["GPIO32","32"],
          ["GPIO33","33"],
          ["GPIO35","35"],
          ["GPIO36","36"],
          ["GPIO37","37"],
          ["GPIO38","38"]
        ]), "Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(252);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['value_out'] = {
  init: function() {
    this.appendValueInput("Pin")
        .setCheck(null)
        .appendField("Pin De Salida");
    this.appendDummyInput()
        .appendField("Valor")
        .appendField(new Blockly.FieldDropdown([
          ["Encender","1"],
          ["Apagar","0"]
        ]), "Value");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(252);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['value_in'] = {
  init: function() {
    this.appendValueInput("Value")
        .setCheck(null)
        .appendField("Leer PIN");
    this.setOutput(true, null);
    this.setColour(252);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['irq_pin'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("Interrupcion en Pin de entrada");
    this.appendValueInput("funcion")
        .setCheck("String")
        .appendField("Activador")
        .appendField(new Blockly.FieldDropdown([["Subida","IRQ_RISING"], ["Bajada","IRQ_FALLING"], ["Cualquier cambio","(IRQ_FALLING | IRQ_RISING)"]]), "trigger")
        .appendField(",Función");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(252);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['irq_on_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Desabilitar","estadoState = disable_irq()"], ["Habilitar","enable_irq(estadoState)"]]), "interruptor")
        .appendField("Interrupciones");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(252);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
