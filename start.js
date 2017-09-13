require('babel-register')({ ignore: /\/(public|node_modules)\// });
require('babel-polyfill');
require('./src/start.js');
