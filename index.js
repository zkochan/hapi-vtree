'use strict';

var toHTML = require('vdom-to-html');

exports.register = function(server, opts, next) {
  server.decorate('reply', 'vtree', function(vtree) {
    var html = '<!DOCTYPE html>' + toHTML(vtree);
    return this.response(html);
  });

  next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
