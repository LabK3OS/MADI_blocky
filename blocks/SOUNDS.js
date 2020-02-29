
'use strict';

goog.provide('Blockly.Blocks.SOUNDS');  // Deprecated
goog.provide('Blockly.Constants.SOUNDS');  // deprecated, 2018 April 5

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
    "message0": "Play %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "VALUE",
        "options": [
          ["C4", "sounds/c4.m4a"],
          ["D4", "sounds/d4.m4a"],
          ["E4", "sounds/e4.m4a"],
          ["F4", "sounds/f4.m4a"],
          ["G4", "sounds/g4.m4a"],
          ["A5", "sounds/a5.m4a"],
          ["B5", "sounds/b5.m4a"],
          ["C5", "sounds/c5.m4a"]
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
