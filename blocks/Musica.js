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
          ["C2", "65"],
          ["C2#", "69"],
          ["D2", "73"],
          ["D2#", "77"],
          ["E2", "82"],
          ["F2", "87"],
          ["F2#", "93"],
          ["G2", "98"],
          ["G2#", "104"],
          ["A2", "110"],
          ["A2#", "117"],
          ["B2", "123"],
          ["C3", "131"],
          ["C3#", "139"],
          ["D3", "147"],
          ["D3#", "156"],
          ["E3", "165"],
          ["F3", "175"],
          ["F3#", "185"],
          ["G3", "196"],
          ["G3#", "208"],
          ["A3", "220"],
          ["A3#", "233"],
          ["B3", "247"],
          ["C4", "262"],
          ["C4#", "277"],
          ["D4", "294"],
          ["D4#", "311"],
          ["E4", "330"],
          ["F4", "349"],
          ["F4#", "370"],
          ["G4", "392"],
          ["G4#", "415"],
          ["A4", "440"],
          ["A4#", "466"],
          ["B4", "494"],
          ["C5", "523"],
          ["C5#", "554"],
          ["D5", "587"],
          ["D5#", "622"],
          ["E5", "659"],
          ["F5", "698"],
          ["F5#", "740"],
          ["G5", "784"],
          ["G5#", "831"],
          ["A5", "880"],
          ["A5#", "932"],
          ["B5", "988"],
          ["C6", "1047"],
          ["C6#", "1047"],
          ["D6", "1175"],
          ["D6#", "1245"],
          ["E6", "1319"],
          ["F6", "1397"],
          ["F6#", "1480"],
          ["G6", "1568"],
          ["G6#", "1661"],
          ["A6", "1761"],
          ["A6#", "1865"],
          ["B6", "1976"],
          ["C7", "2093"]
      ]), "Nota")
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["8","8"],
          ["4","4"],
          ["2","2"],
          ["1","1"],
          ["7/8","0.875"],
          ["3/4","0.75"],
          ["5/8","0.625"],
          ["1/2","0.5"],
          ["3/8","0.375"],
          ["1/4","0.25"],
          ["1/8","0.125"]
        ]), "Tempo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['bajo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tocar Bajo, Nota")
        .appendField(new Blockly.FieldDropdown([
          ["C2", "65"],
          ["C2#", "69"],
          ["D2", "73"],
          ["D2#", "77"],
          ["E2", "82"],
          ["F2", "87"],
          ["F2#", "93"],
          ["G2", "98"],
          ["G2#", "104"],
          ["A2", "110"],
          ["A2#", "117"],
          ["B2", "123"],
          ["C3", "131"],
          ["C3#", "139"],
          ["D3", "147"],
          ["D3#", "156"],
          ["E3", "165"],
          ["F3", "175"],
          ["F3#", "185"],
          ["G3", "196"],
          ["G3#", "208"],
          ["A3", "220"],
          ["A3#", "233"],
          ["B3", "247"]
        ]), "Nota")
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["8","8"],
          ["4","4"],
          ["2","2"],
          ["1","1"],
          ["7/8","0.875"],
          ["3/4","0.75"],
          ["5/8","0.625"],
          ["1/2","0.5"],
          ["3/8","0.375"],
          ["1/4","0.25"],
          ["1/8","0.125"]
        ]), "Tempo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['piano'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tocar Piano, Nota")
        .appendField(new Blockly.FieldDropdown([
          ["C4", "262"],
          ["C4#", "277"],
          ["D4", "294"],
          ["D4#", "311"],
          ["E4", "330"],
          ["F4", "349"],
          ["F4#", "370"],
          ["G4", "392"],
          ["G4#", "415"],
          ["A4", "440"],
          ["A4#", "466"],
          ["B4", "494"],
          ["C5", "523"],
          ["C5#", "554"],
          ["D5", "587"],
          ["D5#", "622"],
          ["E5", "659"],
          ["F5", "698"],
          ["F5#", "740"],
          ["G5", "784"],
          ["G5#", "831"],
          ["A5", "880"],
          ["A5#", "932"],
          ["B5", "988"],
          ["C6", "1047"],
          ["C6#", "1047"],
          ["D6", "1175"],
          ["D6#", "1245"],
          ["E6", "1319"],
          ["F6", "1397"],
          ["F6#", "1480"],
          ["G6", "1568"],
          ["G6#", "1661"],
          ["A6", "1761"],
          ["A6#", "1865"],
          ["B6", "1976"],
          ["C7", "2093"]
        ]), "Nota")
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["8","8"],
          ["4","4"],
          ["2","2"],
          ["1","1"],
          ["7/8","0.875"],
          ["3/4","0.75"],
          ["5/8","0.625"],
          ["1/2","0.5"],
          ["3/8","0.375"],
          ["1/4","0.25"],
          ["1/8","0.125"]
        ]), "Tempo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['xilofono'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tocar Xilófono, Nota")
        .appendField(new Blockly.FieldDropdown([
          ["C4", "262"],
          ["C4#", "277"],
          ["D4", "294"],
          ["D4#", "311"],
          ["E4", "330"],
          ["F4", "349"],
          ["F4#", "370"],
          ["G4", "392"],
          ["G4#", "415"],
          ["A4", "440"],
          ["A4#", "466"],
          ["B4", "494"],
          ["C5", "523"],
          ["C5#", "554"],
          ["D5", "587"],
          ["D5#", "622"],
          ["E5", "659"],
          ["F5", "698"],
          ["F5#", "740"],
          ["G5", "784"],
          ["G5#", "831"],
          ["A5", "880"],
          ["A5#", "932"],
          ["B5", "988"],
          ["C6", "1047"],
          ["C6#", "1047"],
          ["D6", "1175"],
          ["D6#", "1245"],
          ["E6", "1319"],
          ["F6", "1397"],
          ["F6#", "1480"],
          ["G6", "1568"],
          ["G6#", "1661"],
          ["A6", "1761"],
          ["A6#", "1865"],
          ["B6", "1976"],
          ["C7", "2093"]
        ]), "Nota")
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["8","8"],
          ["4","4"],
          ["2","2"],
          ["1","1"],
          ["7/8","0.875"],
          ["3/4","0.75"],
          ["5/8","0.625"],
          ["1/2","0.5"],
          ["3/8","0.375"],
          ["1/4","0.25"],
          ["1/8","0.125"]
        ]), "Tempo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['percusion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tocar Percusión, Nota")
        .appendField(new Blockly.FieldDropdown([
          ["C2", "65"],
          ["C2#", "69"],
          ["D2", "73"],
          ["D2#", "77"],
          ["E2", "82"],
          ["F2", "87"],
          ["F2#", "93"],
          ["G2", "98"],
          ["G2#", "104"],
          ["A2", "110"],
          ["A2#", "117"],
          ["B2", "123"],
          ["C3", "131"],
          ["C3#", "139"],
          ["D3", "147"],
          ["D3#", "156"],
          ["E3", "165"],
          ["F3", "175"],
          ["F3#", "185"],
          ["G3", "196"],
          ["G3#", "208"],
          ["A3", "220"],
          ["A3#", "233"],
          ["B3", "247"]
        ]), "Nota")
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["1/2","0.5"],
          ["3/8","0.375"],
          ["1/4","0.25"],
          ["1/8","0.125"]
        ]), "Tempo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['guitarra'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tocar Guitarra Eléctrica, Nota")
        .appendField(new Blockly.FieldDropdown([
          ["C2", "65"],
          ["C2#", "69"],
          ["D2", "73"],
          ["D2#", "77"],
          ["E2", "82"],
          ["F2", "87"],
          ["F2#", "93"],
          ["G2", "98"],
          ["G2#", "104"],
          ["A2", "110"],
          ["A2#", "117"],
          ["B2", "123"],
          ["C3", "131"],
          ["C3#", "139"],
          ["D3", "147"],
          ["D3#", "156"],
          ["E3", "165"],
          ["F3", "175"],
          ["F3#", "185"],
          ["G3", "196"],
          ["G3#", "208"],
          ["A3", "220"],
          ["A3#", "233"],
          ["B3", "247"],
          ["C4", "262"],
          ["C4#", "277"],
          ["D4", "294"],
          ["D4#", "311"],
          ["E4", "330"],
          ["F4", "349"],
          ["F4#", "370"],
          ["G4", "392"],
          ["G4#", "415"],
          ["A4", "440"],
          ["A4#", "466"],
          ["B4", "494"],
          ["C5", "523"],
          ["C5#", "554"],
          ["D5", "587"],
          ["D5#", "622"],
          ["E5", "659"],
          ["F5", "698"],
          ["F5#", "740"],
          ["G5", "784"],
          ["G5#", "831"],
          ["A5", "880"],
          ["A5#", "932"],
          ["B5", "988"],
          ["C6", "1047"],
          ["C6#", "1047"],
          ["D6", "1175"],
          ["D6#", "1245"],
          ["E6", "1319"],
          ["F6", "1397"],
          ["F6#", "1480"],
          ["G6", "1568"],
          ["G6#", "1661"],
          ["A6", "1761"],
          ["A6#", "1865"],
          ["B6", "1976"],
          ["C7", "2093"]
        ]), "Nota")
        .appendField("Tiempo")
        .appendField(new Blockly.FieldDropdown([
          ["8","8"],
          ["4","4"],
          ["2","2"],
          ["1","1"],
          ["7/8","0.875"],
          ["3/4","0.75"],
          ["5/8","0.625"],
          ["1/2","0.5"],
          ["3/8","0.375"],
          ["1/4","0.25"],
          ["1/8","0.125"]
        ]), "Tempo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sonidos'] = {
  init: function() {
    this.appendValueInput("porcentaje")
        .setCheck(null)
        .appendField("Tocar")
        .appendField(new Blockly.FieldDropdown([
          ["Bajo","0"],
          ["Piano","1"],
          ["Xilófono","2"],
          ["Percusión","3"],
          ["Guitarra","4"]
        ]), "Instrumento")
        .appendField(", al");
    this.appendDummyInput()
        .appendField("% de frecuencia");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['parar_sonido'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Detener Sonido");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(324);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
