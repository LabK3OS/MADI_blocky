/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Python for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.colour');

goog.require('Blockly.Python');


Blockly.Python['colour_picker'] = function(block) {
  // Colour picker.
  Blockly.Python.definitions_['hex_to_rgb'] = 'def hex_to_rgb(value):\n  value = value.lstrip(\'#\')\n  lv = len(value)\n  return tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))\n';
  var code = 'hex_to_rgb(\'' + block.getFieldValue('COLOUR') + '\')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['colour_random'] = function(block) {
  // Generate a random colour.
  Blockly.Python.definitions_['import_random'] = 'import random';
  var code = '(random.randint(0, 2**8 - 1),random.randint(0, 2**8 - 1),random.randint(0, 2**8 - 1))';
  //var code = '\'#%06x\' % random.randint(0, 2**24 - 1)';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['colour_rgb'] = function(block) {
  // Compose a colour from RGB components expressed as percentages.
  var functionName = Blockly.Python.provideFunction_(
      'colour_rgb',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(r, g, b):',
       '  r = round(min(100, max(0, r)) * 2.55)',
       '  g = round(min(100, max(0, g)) * 2.55)',
       '  b = round(min(100, max(0, b)) * 2.55)',
       '  return (r, g, b)']);
       //'  return \'#%02x%02x%02x\' % (r, g, b)']);
  var r = Blockly.Python.valueToCode(block, 'RED',
                                     Blockly.Python.ORDER_NONE) || 0;
  var g = Blockly.Python.valueToCode(block, 'GREEN',
                                     Blockly.Python.ORDER_NONE) || 0;
  var b = Blockly.Python.valueToCode(block, 'BLUE',
                                     Blockly.Python.ORDER_NONE) || 0;
  var code = functionName + '(' + r + ', ' + g + ', ' + b + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['colour_blend'] = function(block) {
  // Blend two colours together.
  var functionName = Blockly.Python.provideFunction_(
      'colour_blend',
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ +
          '(colour1, colour2, ratio):',
       '  r1, r2 = colour1[0], colour2[0]',
       '  g1, g2 = colour1[1], colour2[1]',
       '  b1, b2 = colour1[2], colour2[2]',
       '  ratio = min(1, max(0, ratio))',
       '  r = round(r1 * (1 - ratio) + r2 * ratio)',
       '  g = round(g1 * (1 - ratio) + g2 * ratio)',
       '  b = round(b1 * (1 - ratio) + b2 * ratio)',
       '  return (r, g, b)']);
       //'  return \'#%02x%02x%02x\' % (r, g, b)']);
  var colour1 = Blockly.Python.valueToCode(block, 'COLOUR1',
      Blockly.Python.ORDER_NONE) || '\'#000000\'';
  var colour2 = Blockly.Python.valueToCode(block, 'COLOUR2',
      Blockly.Python.ORDER_NONE) || '\'#000000\'';
  var ratio = Blockly.Python.valueToCode(block, 'RATIO',
      Blockly.Python.ORDER_NONE) || 0;
  var code = functionName + '(' + colour1 + ', ' + colour2 + ', ' + ratio + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};
