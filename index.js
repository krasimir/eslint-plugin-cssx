// retain all original lines for numbering, but disable eslint so as to not trigger rules such as no-multiple-empty-lines and others
var generateReplacement = function (lines) {
  var str = '{/* eslint-disable */ ', i = 1;

  for (;i < lines; i++) str += '\n';
  return str += '}/* eslint-enable */';
}


var Plugin = {
  preprocess: function(text) {
    var re = /<style>([\s\S]*?)<\/style>/g;
    var cleaned = text, match;

    while(match = re.exec(text)) {
      cleaned = cleaned.replace(match[0], generateReplacement(match[0].split(/\n/g).length));
    }

    return [ cleaned ];
  },
  postprocess: function (messages, filename) {
    return messages[0];
  }
};

module.exports = {
  processors: {
    '.js': Plugin,
    '.jsx': Plugin,
    '.cssx': Plugin
  }
}