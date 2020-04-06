'use strict';

goog.provide('Blockly.Blocks.TOUCH');  // Deprecated
goog.provide('Blockly.Constants.TOUCH');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');



Blockly.Blocks['touch_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("Touch"), "Variable");
    this.appendDummyInput()
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown([
          ["Touch0","4"],
          ["Touch1","0"],
          ["Touch2","2"],
          ["Touch3","15"],
          ["Touch4","13"],
          ["Touch5","12"],
          ["Touch6","14"],
          ["Touch7","27"],
          ["Touch8","33"],
          ["Touch9","32"]
        ]), "Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['read_touch'] = {
  init: function() {
    this.appendValueInput("Read")
        .setCheck("String")
        .appendField("Leer Touch");
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
        .appendField("Config. Touch");
    this.appendDummyInput()
        .appendField("Sensibilidad")
        .appendField(new Blockly.FieldNumber(600, 100, 1000), "Value");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
