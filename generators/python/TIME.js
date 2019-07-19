'use strict';

goog.provide('Blockly.Python.TIME');

goog.require('Blockly.Python');

Blockly.Python['time'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\n';
  return code;
};

Blockly.Python['wait'] = function(block) {
  var value_wait_tm = Blockly.Python.valueToCode(block, 'Wait_tm', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_wait_tm+')\n';
  return code;
};
