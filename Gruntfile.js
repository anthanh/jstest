'use strict';
/* global module, require */
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var configObj = {
        servername: 'localhost'
    };

    grunt.initConfig({
        config: configObj,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    'index.html',
                    'test.js'
                ]
            },
            test: {
                files: ['test.js'],
                tasks: ['test']
            }
        },
        connect: {
            options: {
                port: SERVER_PORT,
            },
            test: {
                options: {
                    // change this to '0.0.0.0' to access the server from outside
                    hostname: '<%= config.servername %>',
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, ''),
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://<%= config.servername %>:<%= connect.options.port %>'
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                'test.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= config.servername %>:<%= connect.test.options.port %>/index.html']
                }
            }
        }
    });

    grunt.registerTask('server', function() {
        return grunt.task.run([
            'connect:test',
            'open',
            'watch:livereload'
        ]);
    });

    grunt.registerTask('test', [
        'jshint',
        'connect:test',
        'mocha'
        // 'watch:test'
    ]);

    grunt.registerTask('default', [
        'test'
    ]);
};
