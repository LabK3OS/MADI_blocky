'use strict';

goog.provide('Blockly.Blocks.TIME');  // Deprecated
goog.provide('Blockly.Constants.TIME');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Time");
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("Wait_tm")
        .setCheck("Number")
        .appendField("Wait");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
