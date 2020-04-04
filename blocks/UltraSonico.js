
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
          ["option","OPTIONNAME"],
          ["option","OPTIONNAME"],
          ["option","OPTIONNAME"]
        ]), "Trig")
        .appendField("Echo")
        .appendField(new Blockly.FieldDropdown([
          ["option","OPTIONNAME"],
          ["option","OPTIONNAME"],
          ["option","OPTIONNAME"]
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
