'use strict';

goog.provide('Blockly.Blocks.MUSICA');  // Deprecated
goog.provide('Blockly.Constants.MUSICA');  // deprecated, 2018 April 5

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['Musica'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Notas")
        .appendField(new Blockly.FieldDropdown([
          ["C2", "65.41"],
          ["C2#", "69.3"],
          ["D2", "73.42"],
          ["D2#", "77.78"],
          ["E2", "82.41"],
          ["F2", "87.31"],
          ["F2#", "92.5"],
          ["G2", "98"],
          ["G2#", "103.83"],
          ["A2", "110"],
          ["A2#", "116.54"],
          ["B2", "123.47"],
          ["C3", "130.81"],
          ["C3#", "138.59"],
          ["D3", "146.83"],
          ["D3#", "155.56"],
          ["E3", "164.81"],
          ["F3", "174.61"],
          ["F3#", "185"],
          ["G3", "196"],
          ["G3#", "207.65"],
          ["A3", "220"],
          ["A3#", "233.08"],
          ["B3", "246.94"],
          ["C4", "261.63"],
          ["C4#", "277.18"],
          ["D4", "293.66"],
          ["D4#", "311.13"],
          ["E4", "329.63"],
          ["F4", "349.23"],
          ["F4#", "369.99"],
          ["G4", "392"],
          ["G4#", "415.3"],
          ["A4", "440"],
          ["A4#", "466.16"],
          ["B4", "493.88"],
          ["C5", "523.25"],
          ["C5#", "554.37"],
          ["D5", "587.33"],
          ["D5#", "622.25"],
          ["E5", "659.26"],
          ["F5", "698.46"],
          ["F5#", "739.99"],
          ["G5", "783.99"],
          ["G5#", "830.61"],
          ["A5", "880"],
          ["A5#", "932.33"],
          ["B5", "987.77"],
          ["C6", "1046.5"],
          ["C6#", "1046.5"],
          ["D6", "1174.66"],
          ["D6#", "1244.51"],
          ["E6", "1318.51"],
          ["F6", "1396.91"],
          ["F6#", "1479.98"],
          ["G6", "1567.98"],
          ["G6#", "1661.22"],
          ["A6", "1760.5"],
          ["A6#", "1864.66"],
          ["B6", "1975.53"],
          ["C7", "2093"]
      ]), "Nota");
    this.appendDummyInput()
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["8","8"],
          ["4","4"],
          ["2","2"],
          ["1","1"],
          ["1/2","0.5"],
          ["1/4","0.25"],
          ["1/8","0.125"]
        ]), "Tempo");
    this.appendDummyInput()
        .appendField("Combinado con ↓")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "Combi");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
