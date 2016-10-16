/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {
};


function isJsFile(path) {
    return path.slice(-3) == '.js';
}

function isSpecFile(path) {
    return path.slice(-7) == 'spec.js';
}

function isBuiltFile(path) {
    var builtPath = '/base/app';
    var testPath = '/base/tests';
    return isJsFile(path) && ((path.substr(0, builtPath.length) == builtPath) || (path.substr(0, testPath.length) == testPath));
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

// Load our SystemJS configuration.
System.config({
    baseURL: '/base'
});

System.config(
{
    defaultJSExtensions: true,
    paths: {
        'plugin:' : 'jspm_packages/github/systemjs/',
        'jspm:' : 'jspm_packages/npm/',
        'npm:' : 'node_modules/'
    },
    map: {
        'app': 'app',
        'tests' : 'tests',
        '@angular/core': 'jspm:@angular/core@2.1.0/bundles/core.umd.js',
        '@angular/common': 'jspm:@angular/common@2.1.0/bundles/common.umd.js',
        '@angular/compiler': 'jspm:@angular/compiler@2.1.0/bundles/compiler.umd.js',
        '@angular/platform-browser': 'jspm:@angular/platform-browser@2.1.0/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'jspm:@angular/platform-browser-dynamic@2.1.0/bundles/platform-browser-dynamic.umd.js',
        '@angular/forms': 'jspm:@angular/forms@2.1.0/bundles/forms.umd.js',
        '@angular/router': 'jspm:@angular/router@3.1.0/bundles/router.umd.js',

        // angular testing umd bundles
        '@angular/core/testing': 'jspm:@angular/core@2.1.0/bundles/core-testing.umd.js',
        '@angular/common/testing': 'jspm:@angular/common@2.1.0/bundles/common-testing.umd.js',
        '@angular/compiler/testing': 'jspm:@angular/compiler@2.1.0/bundles/compiler-testing.umd.js',
        '@angular/platform-browser/testing': 'jspm:@angular/platform-browser@2.1.0/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic/testing': 'jspm:@angular/platform-browser-dynamic@2.1.0/bundles/platform-browser-dynamic-testing.umd.js',

        // JSPM related
        'process': 'jspm:process@0.11.9/index.js',
        'text': 'plugin:plugin-text@0.0.9/text.js',

        // other libraries
        'rxjs': 'jspm:rxjs@5.0.0-beta.12',
        'underscore': 'jspm:underscore@1.8.3/underscore.js',
        'ng2-modal': 'jspm:ng2-modal@0.0.20/index.js',
        'ng2-toastr': 'jspm:ng2-toastr@1.2.0',
    },
    packages: {
        'ng2-toastr': { main: 'ng2-toastr.js' }
    }
});

Promise.all([
  System.import('@angular/core/testing'),
  System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.TestBed.initTestEnvironment(testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting());
    
}).then(function () {
    // Finally, load all spec files.
    // This will run the tests directly.
    return Promise.all(
      allSpecFiles.map(function (moduleName) {
          return System.import(moduleName);
      }));
}).then(__karma__.start, __karma__.error);