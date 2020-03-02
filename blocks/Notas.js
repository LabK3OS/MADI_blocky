
'use strict';

goog.provide('Blockly.Blocks.Notas');  // Deprecated
goog.provide('Blockly.Constants.Notas');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');
/*
Blockly.Blocks['play_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play")
        .appendField(new Blockly.FieldDropdown([["C4","sounds/c4.w4a"], ["D4","sounds/d4.w4a"], ["E4","sounds/e4.w4a"], ["F4","sounds/f4.w4a"], ["G4","sounds/g4.w4a"], ["A4","sounds/a4.w4a"], ["B4","sounds/b4.w4a"], ["C5","sounds/c5.w4a"]]), "VALUE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(355);
 this.setTooltip("Sonido");
 this.setHelpUrl("");
  }
};
*/
Blockly.defineBlocksWithJsonArray([
  // Block for colour picker.
  {
    "type": "play_sound",
    "message0": "Reproducir %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["C4", "0"],
          ["D4", "1"],
          ["E4", "2"],
          ["F4", "3"],
          ["G4", "4"],
          ["A4", "5"],
          ["B4", "6"],
          ["C5", "7"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 355,
    "tooltip": "",
    "helpUrl": ""
  }
]);
