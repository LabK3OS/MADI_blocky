'use strict';

goog.provide('Blockly.Blocks.PWM');  // Deprecated
goog.provide('Blockly.Constants.PWM');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');


Blockly.Blocks['pwm_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("pwm1"), "Variable");
    this.appendDummyInput()
        .appendField("Pin")
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
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['conf_pwm'] = {
  init: function() {
    this.appendValueInput("Variable")
        .setCheck(null)
        .appendField("Establecer PWM");
    this.appendDummyInput()
        .appendField("Frecuencia")
        .appendField(new Blockly.FieldNumber(10000, 1, 78100, 1), "Freq")
        .appendField("Hz");
    this.appendDummyInput()
        .appendField("Ciclo util")
        .appendField(new Blockly.FieldNumber(50, 1, 99, 0.1), "Duty")
        .appendField("%");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
