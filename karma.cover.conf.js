﻿module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
          // Polyfills.
          'node_modules/es6-shim/es6-shim.js',

          'node_modules/reflect-metadata/Reflect.js',

          // System.js for module loading
          'node_modules/systemjs/dist/system-polyfills.js',
          'node_modules/systemjs/dist/system.src.js',

          // Zone.js dependencies
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/zone.js/dist/zone.js',
          'node_modules/zone.js/dist/long-stack-trace-zone.js',
          'node_modules/zone.js/dist/proxy.js',   
          'node_modules/zone.js/dist/sync-test.js',
          'node_modules/zone.js/dist/jasmine-patch.js',
          'node_modules/zone.js/dist/async-test.js',
          'node_modules/zone.js/dist/fake-async-test.js',

          // RxJs.
          { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
          { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


          { pattern: 'karma-test-shim.js', included: true, watched: true },

          // paths loaded via module imports
          // Angular itself
          { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
          { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true },

          { pattern: 'node_modules/underscore/**/*.js', included: false, watched: true },

          // Our built application code
          { pattern: 'app/**/*.js', included: false, watched: true },
          // Our built application code
          { pattern: 'tests/**/*.js', included: false, watched: true },

          // paths loaded via Angular's component compiler
          // (these paths need to be rewritten, see proxies section)
          { pattern: 'app/**/*.html', included: false, watched: true },

          // paths to support debugging with source maps in dev tools
          { pattern: 'app/**/*.ts', included: false, watched: false },
          { pattern: 'app/**/*.js.map', included: false, watched: false }
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/app/": "/base/app/"
        },

        reporters: ['progress', 'coverage'],

        preprocessors: {
            'app/**/!(*.spec).js': ['coverage'],
            'app/**/*.js': ['sourcemap']
        },

        coverageReporter: {
            dir: 'report/',
            reporters: [
                {type: 'json', subdir:'coverage' }
            ]
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true
    })
}