'use strict';

goog.provide('Blockly.Blocks.MPU6050');  // Deprecated
goog.provide('Blockly.Constants.MPU6050');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Blocks['import_mpu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importar MPU6050");
    this.setColour(70);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['i2c_mpu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("MPU"), "Variable");
    this.appendDummyInput()
        .appendField("Scl")
        .appendField(new Blockly.FieldDropdown([
          ["SCL","22"],
          ["",""]
        ]), "SCL")
        .appendField("Sda")
        .appendField(new Blockly.FieldDropdown([
          ["SDA","21"],
          ["",""]
        ]), "SDA");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['read_mpu'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("Leer MPU6050");
    this.setOutput(true, "Array");
    this.setColour(70);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
