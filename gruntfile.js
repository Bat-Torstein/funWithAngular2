'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: ['*.less', '**/*.less'],
            tasks: ["less"]
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing. 
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["**/*.less"],
                },
                files: {
                    // compilation.css  :  source.less
                    "styles.css": "app.less"
                }
            },
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/core-js/client/shim.min.js',
                            'node_modules/zone.js/dist/zone.js'
                        ],
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]
            }
        },
		clean: ['app/*.js', 'app/*.js.map', 'app/**/*.js', 'app/**/*.js.map' ]
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
};