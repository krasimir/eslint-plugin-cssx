var fs = require('fs');
var chai = require('chai');
var path = require('path');
var CLIEngine = require('eslint').CLIEngine;
var CSSXPlugin = require('../');

var expect = chai.expect;
var linter = new CLIEngine({});
var cases = [
  {
    file: __dirname + '/data/componentA.jsx',
    expectation: function (result) {
      expect(result.errorCount).to.be.equal(0);
    }
  },
  { 
    file: __dirname + '/data/componentB.jsx',
    expectation: function (result) {
      expect(result.errorCount).to.be.equal(0);
    }
  }
];

linter.addPlugin("eslint-plugin-cssx", CSSXPlugin);

describe('Given the eslint-plugin-cssx', function () {
  cases.forEach(function (testCase) {
    if (testCase.skip) return;
    describe('when we use the plugin on ' + path.basename(testCase.file), function () {
      it('should lint the code', function () {
        testCase.expectation(
          linter.executeOnText(
            fs.readFileSync(testCase.file).toString('utf8'),
            testCase.file
          )
        );
      });
    });
  });
});
