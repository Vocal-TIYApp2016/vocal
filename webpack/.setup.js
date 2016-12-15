require('babel-register')();

// Storage Mock
 function storageMock() {
   var storage = {};

   return {
     setItem: function(key, value) {
       storage[key] = value || '';
     },
     getItem: function(key) {
       return storage[key] || null;
     },
     removeItem: function(key) {
       delete storage[key];
     },
     get length() {
       return Object.keys(storage).length;
     },
     key: function(i) {
       var keys = Object.keys(storage);
       return keys[i] || null;
     }
   };
 }


var jsdom = require('jsdom').jsdom;
global.fetch = require('node-fetch')

var exposedProperties = ['window', 'navigator', 'document'];

global.sessionStorage = storageMock()
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
