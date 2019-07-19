'use strict';

goog.provide('Blockly.Blocks.TOUCH');  // Deprecated
goog.provide('Blockly.Constants.TOUCH');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['touch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Name")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.appendValueInput("Touchp")
        .setCheck("Number")
        .appendField("PIN");
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read_touch'] = {
  init: function() {
    this.appendValueInput("Read")
        .setCheck("String")
        .appendField("Read Pin");
    this.setOutput(true, "Number");
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['conf_touch'] = {
  init: function() {
    this.appendValueInput("Config")
        .setCheck("String")
        .appendField("Config Pin");
    this.appendValueInput("Value")
        .setCheck("Number")
        .appendField("Value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
