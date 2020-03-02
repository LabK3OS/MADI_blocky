
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
          ["C1", "0"],
          ["C1#", "1"],
          ["D1", "2"],
          ["D1#", "3"],
          ["E1", "4"],
          ["F1", "5"],
          ["F1#", "6"],
          ["G1", "7"],
          ["G1#", "8"],
          ["A1", "9"],
          ["A1#", "10"],
          ["B1", "11"],
          ["C2", "12"],
          ["C2#", "13"],
          ["D2", "14"],
          ["D2#", "15"],
          ["E2", "16"],
          ["F2", "17"],
          ["F2#", "18"],
          ["G2", "19"],
          ["G2#", "20"],
          ["A2", "21"],
          ["A2#", "22"],
          ["B2", "23"],
          ["C3", "24"],
          ["C3#", "25"],
          ["D3", "26"],
          ["D3#", "27"],
          ["E3", "28"],
          ["F3", "29"],
          ["F3#", "30"],
          ["G3", "31"],
          ["G3#", "32"],
          ["A3", "33"],
          ["A3#", "34"],
          ["B3", "35"],
          ["C4", "36"],
          ["C4#", "37"],
          ["D4", "38"],
          ["D4#", "39"],
          ["E4", "40"],
          ["F4", "41"],
          ["F4#", "42"],
          ["G4", "43"],
          ["G4#", "44"],
          ["A4", "45"],
          ["A4#", "46"],
          ["B4", "47"],
          ["C5", "48"],
          ["C5#", "49"],
          ["D5", "50"],
          ["D5#", "51"],
          ["E5", "52"],
          ["F5", "53"],
          ["F5#", "54"],
          ["G5", "55"],
          ["G5#", "56"],
          ["A5", "57"],
          ["A5#", "58"],
          ["B5", "59"],
          ["C6", "60"]
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
