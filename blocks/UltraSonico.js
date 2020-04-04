
'use strict';

goog.provide('Blockly.Blocks.UltraSonico');  // Deprecated
goog.provide('Blockly.Constants.UltraSonico');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Blocks['hc_sr04'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importar HC-SR04");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sensor_ultrasonico'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("U_Sonico"), "Sensor");
    this.appendDummyInput()
        .appendField("Trig")
        .appendField(new Blockly.FieldDropdown([
          ["GPIO4","4"],
          ["GPIO12","12"],
          ["GPIO13","13"],
          ["GPIO14","14"],
          ["GPIO15","15"],
          ["GPIO16","16"],
          ["GPIO17","17"],
          ["GPIO25","25"],
          ["GPIO26","26"],
          ["GPIO27","27"],
          ["GPIO32","32"],
          ["GPIO33","33"],
          ["GPIO34","34"],
          ["GPIO35","35"],
          ["GPIO36","36"],
          ["GPIO37","37"],
          ["GPIO38","38"],
          ["GPIO39","39"]
        ]), "Trig")
        .appendField("Echo")
        .appendField(new Blockly.FieldDropdown([
          ["GPIO4","4"],
          ["GPIO12","12"],
          ["GPIO13","13"],
          ["GPIO14","14"],
          ["GPIO15","15"],
          ["GPIO16","16"],
          ["GPIO17","17"],
          ["GPIO25","25"],
          ["GPIO26","26"],
          ["GPIO27","27"],
          ["GPIO32","32"],
          ["GPIO33","33"],
          ["GPIO34","34"],
          ["GPIO35","35"],
          ["GPIO36","36"],
          ["GPIO37","37"],
          ["GPIO38","38"],
          ["GPIO39","39"]
        ]), "Echo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['distancia_ultrasonico'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Distancia");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
