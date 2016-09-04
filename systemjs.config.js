﻿System.config({
    paths: {
        'npm:': 'node_modules/',
    },
    map: {
        'rxjs': 'npm:rxjs',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

        'underscore': 'node_modules/underscore/underscore.js'
    },
    packages: {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    }
});
