
'use strict';

goog.provide('Blockly.Blocks.GPIO');  // Deprecated
goog.provide('Blockly.Constants.GPIO');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PIN");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gpio_in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pin as IN");
    this.appendDummyInput()
        .appendField("Resistor")
        .appendField(new Blockly.FieldDropdown([["UP","UP"], ["DOWN","DOWN"], ["WITHOUT","WITHOUT"]]), "Resistor");
    this.appendValueInput("NUM_PIN")
        .setCheck("Number")
        .appendField("Num Pin")
        .appendField(new Blockly.FieldVariable("item"), "Name");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gpio_out'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pin as OUT");
    this.appendValueInput("NUM_PIN")
        .setCheck("Number")
        .appendField("Num Pin")
        .appendField(new Blockly.FieldVariable("item"), "Name");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['value_out'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Value")
        .appendField(new Blockly.FieldDropdown([["HIGH","H"], ["LOW","L"]]), "Value");
    this.appendValueInput("Pin")
        .setCheck("String")
        .appendField("Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


