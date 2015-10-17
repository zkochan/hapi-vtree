# hapi-vtree

[hapi.js](http://hapijs.com/) plugin for replying with [Virtual DOM](https://github.com/Matt-Esch/virtual-dom/).

[![Dependency Status](https://david-dm.org/zkochan/hapi-vtree/status.svg?style=flat)](https://david-dm.org/zkochan/hapi-vtree)
[![Build Status](https://travis-ci.org/zkochan/hapi-vtree.svg?branch=master)](https://travis-ci.org/zkochan/hapi-vtree)
[![npm version](https://badge.fury.io/js/hapi-vtree.svg)](http://badge.fury.io/js/hapi-vtree)


## Installation

```
npm install --save hapi-vtree
```


## Usage

Register the plugin:

```js
var Hapi = require('hapi');
var hapiVtree = require('hapi-vtree');

var server = new Hapi.Server();

server.register(hapiVtree, function(err) {
  if (err) {
    console.log("Failed to load hapi-vtree.");
  }
});
```

Reply with a virtual tree in your handler:

```js
var h = require('virtual-dom/h');

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    var vtree = h('div', 'Hello world!');
    reply.vtree(vtree);
  }
});
```


## License

MIT
