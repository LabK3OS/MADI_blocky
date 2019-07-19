'use strict';

goog.provide('Blockly.Blocks.UART_INI');  // Deprecated
goog.provide('Blockly.Constants.UART_INI');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['uart_ini'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Variable")
        .appendField(new Blockly.FieldVariable("item"), "UART");
    this.appendDummyInput()
        .appendField("Parity")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Parity");
    this.appendDummyInput()
        .appendField("Stop")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Stop");
    this.appendValueInput("Identify")
        .setCheck("Number")
        .appendField("ID");
    this.appendValueInput("Bits")
        .setCheck("Number")
        .appendField("BIts");
    this.appendValueInput("Baudrate")
        .setCheck("Number")
        .appendField("Baudrate");
    this.appendValueInput("Pinstx")
        .setCheck("Number")
        .appendField("Pin TX");
    this.appendValueInput("Pinsrx")
        .setCheck("Number")
        .appendField("Pin RX");
    this.setInputsInline(false);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read'] = {
  init: function() {
    this.appendValueInput("Read")
        .setCheck("String")
        .appendField("Read");
    this.setOutput(true, "String");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['read_n'] = {
  init: function() {
    this.appendValueInput("Read")
        .setCheck("String")
        .appendField("Read");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Number bits");
    this.setOutput(true, "String");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['write'] = {
  init: function() {
    this.appendValueInput("Uart")
        .setCheck("String")
        .appendField("Uart");
    this.appendValueInput("Write")
        .setCheck("String")
        .appendField("Write");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

