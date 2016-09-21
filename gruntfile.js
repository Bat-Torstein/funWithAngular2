'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        clean: {
            js: ['dist/app.js', 'dist/**/*.js', 'dist/**/*.js.map']
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['dist/app/*.js', 'dist/app/**/*.js'],
                dest: 'dist/app.js',
            },
        },
        uglify: {
            options: {
                mangle: false,
                compress: true
            },
            my_target: {
                files: {
                    'app.min.js': ['dist/app.js']
                }
            }
        },
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
                expand: true,
                src: 'app/**/*.html',
                dest: 'dist/',
            },
        }
    });
    // the default task (running "grunt" in console) is "watch"
    grunt.registerTask('default', ['watch']);
};