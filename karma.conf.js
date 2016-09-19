module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/systemjs/dist/system-polyfills.js',
          'node_modules/systemjs/dist/system.src.js',
          'node_modules/reflect-metadata/Reflect.js',
          'node_modules/zone.js/dist/zone.js',
          'node_modules/zone.js/dist/long-stack-trace-zone.js',
          'node_modules/zone.js/dist/proxy.js',   
          'node_modules/zone.js/dist/sync-test.js',
          'node_modules/zone.js/dist/jasmine-patch.js',
          'node_modules/zone.js/dist/async-test.js',
          'node_modules/zone.js/dist/fake-async-test.js',

          { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
          { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
          { pattern: 'karma-test-shim.js', included: true, watched: true },
          { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },
          { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true },
          { pattern: 'node_modules/underscore/**/*.js', included: false, watched: true },
          { pattern: 'node_modules/ng2-modal/*.js', included: false, watched: true },
          { pattern: 'dist/**/*.js', included: false, watched: true },
          { pattern: 'dist/**/*.html', included: false, watched: true },

          // paths to support debugging with source maps in dev tools
          { pattern: 'app/**/*.ts', included: false, watched: true },
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/app/": "/base/app/"
        },

        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
            exitOnResourceError: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    })
}