

Blockly.Blocks['Musica'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Notas")
        .appendField(new Blockly.FieldDropdown([
          ["C1", "32.70"],
          ["C1#", "34.65"],
          ["D1", "36.71"],
          ["D1#", "38.89"],
          ["E1", "41.20"],
          ["F1", "43.65"],
          ["F1#", "46.25"],
          ["G1", "49"],
          ["G1#", "51.91"],
          ["A1", "55"],
          ["A1#", "58.27"],
          ["B1", "61.74"],
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
          ["C6", "1046.5"]
      ]), "Nota");
    this.appendDummyInput()
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["Maxima","8"],
          ["Longa","4"],
          ["Cuadrada","2"],
          ["Redonda","1"],
          ["Blanca","0.5"],
          ["Negra","0.25"],
          ["Corchea","0.125"]
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
