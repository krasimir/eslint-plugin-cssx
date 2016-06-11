var CSSXTranspiler = require('cssx-transpiler');

var Plugin = {
  preprocess: function(text) {
    return [ CSSXTranspiler(text, { minified: false }) ];
  },
  postprocess: function(messages) {
    return messages;
  }
};

module.exports = {
  processors: {
    '.js': Plugin,
    '.jsx': Plugin,
    '.cssx': Plugin
  }
}