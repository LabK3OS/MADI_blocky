'use strict';

goog.provide('Blockly.Blocks.ADC');  // Deprecated
goog.provide('Blockly.Constants.ADC');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');



Blockly.Blocks['adc_pin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("Conversor"), "Variable");
    this.appendDummyInput()
        .appendField("Pin")
        .appendField(new Blockly.FieldDropdown([
          ["ADC1_0","36"],
          ["ADC1_1","37"],
          ["ADC1_2","38"],
          ["ADC1_3","39"],
          ["ADC1_4","32"],
          ["ADC1_5","33"],
          ["ADC1_6","34"],
          ["ADC2_0","4"],
          ["ADC2_1","0"],
          ["ADC2_2","2"],
          ["ADC2_3","15"],
          ["ADC2_4","13"],
          ["ADC2_5","12"],
          ["ADC2_6","14"],
          ["ADC2_7","27"],
          ["ADC2_8","25"],
          ["ADC2_9","26"]
        ]), "Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(126);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['read_adc'] = {
  init: function() {
    this.appendValueInput("Value")
        .setCheck(null)
        .appendField("Leer ADC");
    this.setOutput(true, null);
    this.setColour(126);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
