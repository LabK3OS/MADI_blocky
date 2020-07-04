/**
 * Blockly Demos: Code
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
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
  'es': 'Español',
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang = Code.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'es';
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch (e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(xml, Code.workspace);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
    languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
    window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function(el, func) {
  if (typeof el == 'string') {
    el = document.getElementById(el);
  }
  el.addEventListener('click', func, true);
  el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
  document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
Code.TABS_ = ['blocks', 'python'];

Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function(clickedName) {
  // If the XML tab was open, save and render the content.
  if (document.getElementById('tab_xml').className == 'tabon') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlText = xmlTextarea.value;
    var xmlDom = null;
    try {
      xmlDom = Blockly.Xml.textToDom(xmlText);
    } catch (e) {
      var q =
        window.confirm(MSG['badXml'].replace('%1', e));
      if (!q) {
        // Leave the user on the XML tab.
        return;
      }
    }
    if (xmlDom) {
      Code.workspace.clear();
      Blockly.Xml.domToWorkspace(xmlDom, Code.workspace);
    }
  }

  if (document.getElementById('tab_blocks').className == 'tabon') {
    Code.workspace.setVisible(false);
  }
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    document.getElementById('tab_' + name).className = 'taboff';
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  Code.selected = clickedName;
  document.getElementById('tab_' + clickedName).className = 'tabon';
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
    'visible';
  Code.renderContent();
  if (clickedName == 'blocks') {
    Code.workspace.setVisible(true);
  }
  Blockly.svgResize(Code.workspace);
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function() {
  var content = document.getElementById('content_' + Code.selected);
  // Initialize the pane.
  if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
  } else if (content.id == 'content_javascript') {
    Code.attemptCodeGeneration(Blockly.JavaScript, 'js', 0);
  } else if (content.id == 'content_python') {
    Code.attemptCodeGeneration(Blockly.Python, 'py', 0);
  } else if (content.id == 'content_php') {
    Code.attemptCodeGeneration(Blockly.PHP, 'php', 0);
  } else if (content.id == 'content_dart') {
    Code.attemptCodeGeneration(Blockly.Dart, 'dart', 0);
  } else if (content.id == 'content_lua') {
    Code.attemptCodeGeneration(Blockly.Lua, 'lua', 0);
  }
};

/**
 * Attempt to generate the code and display it in the UI, pretty printed.
 * @param generator {!Blockly.Generator} The generator to use.
 * @param prettyPrintType {string} The file type key for the pretty printer.
 */
Code.attemptCodeGeneration = function(generator, prettyPrintType, des) {
  var content = document.getElementById('content_' + Code.selected);
  content.textContent = '';
  if (Code.checkAllGeneratorFunctionsDefined(generator)) {
    var code = generator.workspaceToCode(Code.workspace);

    content.textContent = code;
    if (typeof PR.prettyPrintOne == 'function') {
      code = content.textContent;
      code = PR.prettyPrintOne(code, prettyPrintType);
      //if(des == 0) {
      content.innerHTML = code;
      //else {
      //content.outerHTML = code;
      //content.outerText = content.outerHTML;
      //var patron = "<div id=\"content_blocks\" class=\"content\" style=\"visibility: visible; top: 86px; left: 0px; height: 556px; width: 1301px;\">";
      //var nun = "";
      //var patron2 = "</div>"
      //var nuevo = content.outerHTML.replace(patron,nun); //outerText
      //nuevo = nuevo.replace(patron2,nun);
      //Descargar(nuevo);

    }
  }
};

/**
 * Check whether all blocks in use have generator functions.
 * @param generator {!Blockly.Generator} The generator to use.
 */
Code.checkAllGeneratorFunctionsDefined = function(generator) {
  var blocks = Code.workspace.getAllBlocks(false);
  var missingBlockGenerators = [];
  for (var i = 0; i < blocks.length; i++) {
    var blockType = blocks[i].type;
    if (!generator[blockType]) {
      if (missingBlockGenerators.indexOf(blockType) === -1) {
        missingBlockGenerators.push(blockType);
      }
    }
  }

  var valid = missingBlockGenerators.length == 0;
  if (!valid) {
    var msg = 'The generator code for the following blocks not specified for ' +
      generator.name_ + ':\n - ' + missingBlockGenerators.join('\n - ');
    Blockly.alert(msg); // Assuming synchronous. No callback.
  }
  return valid;
};

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function() {
  Code.initLanguage();
  var rtl = Code.isRtl();
  var container = document.getElementById('content_area');
  var onresize = function(e) {
    var bBox = Code.getBBox_(container);
    for (var i = 0; i < Code.TABS_.length; i++) {
      var el = document.getElementById('content_' + Code.TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Code.workspace && Code.workspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
        (Code.workspace.toolbox_.width - 38) + 'px';
      // Account for the 19 pixel margin and on each side.
    }
  };
  window.addEventListener('resize', onresize, false);

  // The toolbox XML specifies each category name using Blockly's messaging
  // format (eg. `<category name="%{BKY_CATLOGIC}">`).
  // These message keys need to be defined in `Blockly.Msg` in order to
  // be decoded by the library. Therefore, we'll use the `MSG` dictionary that's
  // been defined for each language to import each category name message
  // into `Blockly.Msg`.
  // TODO: Clean up the message files so this is done explicitly instead of
  // through this for-loop.
  for (var messageKey in MSG) {
    if (messageKey.indexOf('cat') == 0) {
      Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
    }
  }

  // Construct the toolbox XML, replacing translated variable names.
  var toolboxText = document.getElementById('toolbox').outerHTML;
  toolboxText = toolboxText.replace(/(^|[^%]){(\w+)}/g,
    function(m, p1, p2) {
      return p1 + MSG[p2];
    });
  var toolboxXml = Blockly.Xml.textToDom(toolboxText);

  Code.workspace = Blockly.inject('content_blocks', {
    grid: {
      spacing: 20,
      length: 4,
      colour: '#ccc',
      snap: true
    },
    media: '../../media/',
    rtl: rtl,
    toolbox: toolboxXml,
    zoom: {
      controls: true,
      wheel: true
    }
  });

  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

  Code.loadBlocks('');

  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  Code.tabClick(Code.selected);

  Code.bindClick('trashButton',
    function() {
      Code.discard();
      Code.renderContent();
    });
  Code.bindClick('runButton', Code.runJS);
  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] = MSG['httpRequestError'];
    BlocklyStorage['LINK_ALERT'] = MSG['linkAlert'];
    BlocklyStorage['HASH_ERROR'] = MSG['hashError'];
    BlocklyStorage['XML_ERROR'] = MSG['xmlError'];
    Code.bindClick(linkButton,
      function() {
        BlocklyStorage.link(Code.workspace);
      });
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    Code.bindClick('tab_' + name,
      function(name_) {
        return function() {
          Code.tabClick(name_);
        };
      }(name));
  }
  onresize();
  Blockly.svgResize(Code.workspace);

  // Lazy-load the syntax-highlighting.
  window.setTimeout(Code.importPrettify, 1);
};

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  //document.title += ' ' + MSG['title'];
  //document.getElementById('title').textContent = MSG['title'];
  //document.getElementById('tab_blocks').textContent = MSG['blocks'];

  document.getElementById('linkButton').title = MSG['linkTooltip'];
  document.getElementById('runButton').title = MSG['runTooltip'];
  document.getElementById('trashButton').title = MSG['trashTooltip'];
};

/**
 * Execute the user's code.
 * Just a quick and dirty eval.  Catch infinite loops.
 */
Code.runJS = function() {
  Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
  var timeouts = 0;
  var checkTimeout = function() {
    if (timeouts++ > 1000000) {
      throw MSG['timeout'];
    }
  };
  Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  Blockly.JavaScript.addReservedWords('highlightBlock');
  var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
  //Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    alert(code);
    eval(code);
    comprobador_de_pines();
  } catch (e) {
    alert(MSG['badCode'].replace('%1', e));
  }
};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function() {
  var count = Code.workspace.getAllBlocks(false).length;
  if (count < 2 ||
    window.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count))) {
    Code.workspace.clear();
    if (window.location.hash) {
      window.location.hash = '';
    }
  }
};

// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// Load Blockly's language strings.
document.write('<script src="../../msg/js/' + Code.LANG + '.js"></script>\n');

window.addEventListener('load', Code.init);
/*
var workspace = Blockly.inject(blocklyDiv,
    {media: 'media/',
  toolbox: document.getElementById('toolbox'),
  zoom:
       {controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2},
  grid:
       {spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true},
    trashcan: true
  });
  */
  var tipo_descarga;
function Desc() {
  Blockly.Python.INFINITE_LOOP_TRAP = null;
  var code = Blockly.Python.workspaceToCode(Code.workspace);
  alert(code);
  var code1 = Blockly.Python.workspaceToCode(Code.workspace);
  tipo_descarga = 1;
  Descargar(code1);

  //Code.attemptCodeGeneration(Blockly.Python, 'py',1);
}

function Descargar(code) {
  // grab the content of the form field and place it into a variable
  //  create a new Blob (html5 magic) that conatins the data from your form feild

  var textFileAsBlob = new Blob([code], {
    type: 'text/plain'
  });
  // Specify the name of the file to be saved
  if (tipo_descarga==1){
    var fileNameToSaveAs = "main.py";
  }
  else if(tipo_descarga==2)
  {
    var fileNameToSaveAs = "bloques.txt";
  }
  // Optionally allow the user to choose a file name by providing
  // an imput field in the HTML and using the collected data here
  // var fileNameToSaveAs = txtFileName.text;

  // create a link for our script to 'click'
  var downloadLink = document.createElement("a");
  //  supply the name of the file (from the var above).
  // you could create the name here but using a var
  // allows more flexability later.
  downloadLink.download = fileNameToSaveAs;
  // provide text for the link. This will be hidden so you
  // can actually use anything you want.
  downloadLink.innerHTML = "My Hidden Link";

  // allow our code to work in webkit & Gecko based browsers
  // without the need for a if / else block.
  window.URL = window.URL || window.webkitURL;

  // Create the link Object.
  downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  // when link is clicked call a function to remove it from
  // the DOM in case user wants to save a second file.
  downloadLink.onclick = destroyClickedElement;
  // make sure the link is hidden.
  downloadLink.style.display = "none";
  // add the link to the DOM
  document.body.appendChild(downloadLink);

  // click the new link
  downloadLink.click();
}

function destroyClickedElement(event) {
  // remove the link from the DOM
  document.body.removeChild(event.target);
}


var ws;
var connected = false;
var binary_state = 0;
var put_file_name = null;
var put_file_data = null;
var get_file_name = null;
var get_file_data = null;
var card_ip = "ws://192.168.0.1:8266/";
var puer = "8266";
var cardIP;
var puert;

function Conectar() {
  if (connected) {
    ws.close();
  } else {
    if(cardIP==null || puert==null)
    {
      cardIP = prompt("Ingrese la dirección IP de la tarjeta a programar", card_ip);
      puert = prompt("Ingrese el puerto de la tarjeta a programar", puer);
    }
    else{
      alert("Reconectando...");
    }
    if(card_ip==null || puert==null){
      alert("Conexión Cancelada");
    }
    else{
      connected = true;
      alert(`ws://${cardIP}:${puert}/`);
      connect1(cardIP, puert);
    }
  }
}
var contra = "1234";
var arreglo=0;
var po=0;
var auxl="";
var arreglo2=[];
var passw;
function connect1(url, por) {
  window.location.hash = url.substring(5);
  ws = new WebSocket(`ws://${url}:${por}/`);
  ws.binaryType = 'arraybuffer';
  ws.onopen = function() {
    if(passw==null)
    {
      passw = prompt("Ingrese contraseña", contra);
    }
    ws.send(passw);
    ws.send('\r');
    ws.onmessage = function(event) {
      console.log(event.data);

      if(event.data=="[" || arreglo==1)
      {
        arreglo=1;
        if(event.data=="'" && po==0)
        {
          po=1;
        }
        else if(event.data=="'" && po==1)
        {
          po=0;
          arreglo2.push(auxl);
          alert(auxl);
          auxl="";
        }
        else if(po==1)
        {
          auxl=auxl+event.data;
        }
      }
      else if(event.data=="]")
      {
        aler("1");
        arreglo=0;
        alert(arreglo2[0]);
      }
      if (event.data instanceof ArrayBuffer) {
        var data = new Uint8Array(event.data);
        switch (binary_state) {
          case 11:
            // first response for put
            if (decode_resp(data) == 0) {
              // send file data in chunks
              for (var offset = 0; offset < put_file_data.length; offset += 1024) {
                ws.send(put_file_data.slice(offset, offset + 1024));
              }
              binary_state = 12;
            }
            break;
          case 12:
            // final response for put
            binary_state = 0;
            alert("archivo enviado, Reconecte tarjeta");
            ws.send("\x04");
            break;

          case 21:
            // first response for get
            if (decode_resp(data) == 0) {
              binary_state = 22;
              var rec = new Uint8Array(1);
              rec[0] = 0;
              ws.send(rec);
            }
            break;
          case 22:
            // file data
            var sz = data[0] | (data[1] << 8);
            if (data.length == 2 + sz) {
              // we assume that the data comes in single chunks
              if (sz == 0) {
                // end of file
                binary_state = 23;
              } else {
                // accumulate incoming data to get_file_data
                var new_buf = new Uint8Array(get_file_data.length + sz);
                new_buf.set(get_file_data);
                new_buf.set(data.slice(2), get_file_data.length);
                get_file_data = new_buf;

                var rec = new Uint8Array(1);
                rec[0] = 0;
                ws.send(rec);
              }
            } else {
              binary_state = 0;
            }
            break;
          case 23:
            // final response
            if (decode_resp(data) == 0) {

              saveAs(new Blob([get_file_data], {
                type: "application/octet-stream"
              }), get_file_name);
            }
            binary_state = 0;
            break;
          case 31:
            // first (and last) response for GET_VER
            console.log('GET_VER', data);
            binary_state = 0;
            break;
          case 41:
            alert("entre aqui");
          break;
        }
      }
      //alert(event.data);
    };
  };
  ws.onerror = function(event) {
    alert("Error en el WebSocket",event.data);
  };
  ws.onclose = function() {
    connected = false;
  };
}

function decode_resp(data) {
  if (data[0] == 'W'.charCodeAt(0) && data[1] == 'B'.charCodeAt(0)) {
    var code = data[2] | (data[3] << 8);
    return code;
  } else {
    return -1;
  }
}

function toUTF8Array(str) {
  var utf8 = [];
  for (var i = 0; i < str.length; i++) {
    var charcode = str.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode < 0x800) {
      utf8.push(0xc0 | (charcode >> 6),
        0x80 | (charcode & 0x3f));
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(0xe0 | (charcode >> 12),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f));
    }
    // surrogate pair
    else {
      i++;
      charcode = ((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff);
      utf8.push(0xf0 | (charcode >> 18),
        0x80 | ((charcode >> 12) & 0x3f),
        0x80 | ((charcode >> 6) & 0x3f),
        0x80 | (charcode & 0x3f));
    }
  }
  return utf8;
}

function correccion(arr) {
  var j = 0;
  var can = 0;
  var arr2 = [];
  var mem = 0;
  for (var i = 0; i < arr.length; ++i) {
    j = 0;
    if (arr[i] == 32) {
      while (arr[i] == 32) {
        j++;
        i++;
      }
      i = i - j;
      if (j % 2 == 0 && j != 1) {
        can = j * 2;
        for (var z = 0; z < can; z++) {
          arr2[i + mem + z] = 32;
        }
        i = i + j - 1;
        mem = can + mem - j;
      } else {
        for (var z = 0; z < j; z++) {
          arr2[i + mem + z] = 32;
        }
      }
    } else {
      arr2[i + mem] = arr[i];
    }
  }
  put_file_data = new Uint8Array(arr2);
}

function enviar() {
  Blockly.Python.INFINITE_LOOP_TRAP = null;
  var code = toUTF8Array(Blockly.Python.workspaceToCode(Code.workspace));
  var dest_fname = "main.py";
  put_file_data = new Uint8Array(code);
  correccion(put_file_data);
  var dest_fsize = put_file_data.length;
  // WEBREPL_FILE = "<2sBBQLH64s"
  var rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);
  rec[0] = 'W'.charCodeAt(0);
  rec[1] = 'A'.charCodeAt(0);
  rec[2] = 1; // put
  rec[3] = 0;
  rec[4] = 0;
  rec[5] = 0;
  rec[6] = 0;
  rec[7] = 0;
  rec[8] = 0;
  rec[9] = 0;
  rec[10] = 0;
  rec[11] = 0;
  rec[12] = dest_fsize & 0xff;
  rec[13] = (dest_fsize >> 8) & 0xff;
  rec[14] = (dest_fsize >> 16) & 0xff;
  rec[15] = (dest_fsize >> 24) & 0xff;
  rec[16] = dest_fname.length & 0xff;
  rec[17] = (dest_fname.length >> 8) & 0xff;
  for (var i = 0; i < 64; ++i) {
    if (i < dest_fname.length) {
      rec[18 + i] = dest_fname.charCodeAt(i);
    } else {
      rec[18 + i] = 0;
    }
  }

  // initiate put
  binary_state = 11;
  ws.send(rec);
}

var pines = [];
var pre_mensa = ["CLC1/GPIO0/ADC2_1/TOUCH1/BOTTON", "CS/GPIO2/ADC2_2/HSPI_WP/TOUCH2", "GPIO4/ADC2_0/HSPI_HD/TOUCH0", "GPIO5/V_SPI_CS0/LED", "GPIO12/ADC2_5/HSPI_Q/TOUCH5", "GPIO13/ADC2_4/HSP_ID/TOUCH4", "GPIO14/ADC2_6/HSPI_CLK/TOUCH6", "GPIO15/ADC2_3/HSPI_CS0/TOUCH3", "GPIO16/U2_RXD", "GPIO17/U2_TXD", "SCK/GPIO18/V_SPI_CLK", "MISO/GPIO19/V_SPI_Q/U0_CTS", "SDA/GPIO21/V_SPI_HD", "SCL/GPIO22/V_SPI_WP/U0_RTS", "MOSI/GPIO23/V_SPI_D", "GPIO25/ADC2_8/DAC1", "GPIO26/ADC2_9/DAC2", "GPIO27/ADC2_7/TOUCH7", "XTAL32/GPIO32/ADC1_4/TOUCH9", "XTAL32/GPIO33/ADC1_5/TOUCH8", "GPIO34/ADC1_6/VDET1", "GPIO35/ADC1_7/VDET2", "SENSEVP/GPIO36/ADC1_0", "CAPVP/GPIO37/ADC1_1", "CAPVN/GPIO38/ADC1_2", "SENSVN/GPIO39/ADC1_3"];
var pin_out = [0, 2, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27, 32, 33, 34, 35, 36, 37, 38, 39];



function MusicMaker(So, tempo, tipo) {   //eval('moverImagen(\'adelante\')');
  var frecuencia = parseFloat(So);
  var tiempo = parseFloat(tempo);
    jsNota(frecuencia, tiempo, tipo);
    tiempo = tiempo * 1000;
  sleepi(tiempo);
}


var context = new AudioContext();

function jsNota(frecuencia, tempo, tipo) {
  if(tipo==null)
  {
    tipo="sine";
  }
  var o = context.createOscillator();
  var g = context.createGain();
  o.connect(g);
  o.type = tipo;
  o.frequency.value = frecuencia;
  g.connect(context.destination);
  o.start(0);
  g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + tempo);
}

function sleepi(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function iniciador_de_pines() {
  pines = [];
}

function guardador_de_pines(pin) {
  pines.push(parseInt(pin));
}

function comprobador_de_pines() {
  var repetidos = {};
  pines.forEach(function(numero) {
    repetidos[numero] = (repetidos[numero] || 0) + 1;
  });
  var mensaje_error = "ERROR\n\n";
  var pasa = false;
  for (var i = 0; i < pin_out.length; i++) {
    if (repetidos[pin_out[i]] > 1) {
      mensaje_error = mensaje_error + "- El PIN " + pin_out[i] + " (" + pre_mensa[i] + ") Esta siendo usado " + repetidos[pin_out[i]] + " veces\n";
      pasa = true;
    }
  }
  if (pasa) {
    alert(mensaje_error);
  } else {
    //alert("Correcto");
  }
}

function highlightBlock(id) {
  Code.workspace.highlightBlock(id);
}


function guardado()
{
  var xml = Blockly.Xml.workspaceToDom(Code.workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  tipo_descarga = 2;
  Descargar(xml_text);
}

function verificar()
{
  ws.send("os.listdir()\r");
}
