module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
          'jspm_packages/npm/reflect-metadata@0.1.8/Reflect.js',
          'jspm_packages/system-polyfills.js',
          'jspm_packages/system.src.js',
          'jspm_packages/npm/zone.js@0.6.25/dist/zone.js',
          'jspm_packages/npm/zone.js@0.6.25/dist/long-stack-trace-zone.js',
          'jspm_packages/npm/zone.js@0.6.25/dist/proxy.js',
          'jspm_packages/npm/zone.js@0.6.25/dist/sync-test.js',
          'jspm_packages/npm/zone.js@0.6.25/dist/jasmine-patch.js',
          'jspm_packages/npm/zone.js@0.6.25/dist/async-test.js',
          'jspm_packages/npm/zone.js@0.6.25/dist/fake-async-test.js',
          
          { pattern: 'jspm_packages/npm/rxjs@5.0.0-beta.12/**/*.js', included: false, watched: false },
          { pattern: 'jspm_packages/npm/rxjs@5.0.0-beta.12/**/*.js.map', included: false, watched: false },
          { pattern: 'karma-test-shim.js', included: true, watched: true },
          { pattern: 'jspm_packages/npm/@angular/**/*.js', included: false, watched: false },
          { pattern: 'jspm_packages/npm/underscore@1.8.3/*.js', included: false, watched: false },
          { pattern: 'jspm_packages/npm/ng2-modal@0.0.20/*.js', included: false, watched: false },
          { pattern: 'jspm_packages/npm/ng2-toastr@1.2.0/**/*.js', included: false, watched: false },
          { pattern: 'jspm_packages/npm/process@0.11.9/*.js', included: false, watched: false },
          { pattern: 'jspm_packages/github/systemjs/**/*.js', included: false, watched: false },
          { pattern: 'tests/**/*.js', included: false, watched: true },
          { pattern: 'app/*.js', included: false, watched: true },
          { pattern: 'app/**/*.js', included: false, watched: true },
          { pattern: 'app/**/*.html', included: false, watched: true },

          // paths to support debugging with source maps in dev tools
          { pattern: 'app/**/*.ts', included: false, watched: true }
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