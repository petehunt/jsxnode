var execSync = require('execSync');

describe('jsxnode', function() {
  it('works', function() {
    var result = execSync.exec('bin/jsxnode example.js');
    expect(result.stdout).toBe('Hello, Pete\n');
  });
});
