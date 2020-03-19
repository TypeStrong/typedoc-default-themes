const sass = require('sass');

module.exports = function(grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            themeDefault: {
                tsconfig: './tsconfig.json',
                options: {
                    // Required because of https://github.com/TypeStrong/grunt-ts/issues/432
                    // Wouldn't be needed if lunr fixed https://github.com/olivernn/lunr.js/issues/324
                    additionalFlags: '--alwaysStrict false'
                }
            }
        },
        uglify: {
            themeDefault: {
                options: {
                    mangle: false
                },
                files: {
                    'bin/default/assets/js/main.js': [
                        'node_modules/lunr/lunr.min.js',
                        'src/default/assets/js/main.js'
                    ]
                }
            }
        },
        'string-replace': {
            themeMinimal: {
                files: {
                    'bin/minimal/layouts/default.hbs': ['src/minimal/layouts/default.hbs']
                },
                options: {
                    replacements: [{
                        pattern: /{{ CSS }}/g,
                        replacement: function() {
                            var css = grunt.file.read('bin/default/assets/css/main.css');
                            return css.replace(/url\(([^\)]*)\)/g, function(match, file) {
                                if (match.indexOf(':') != -1) return match;
                                var path = require('path'), fs = require('fs');
                                var file = path.resolve('bin/default/assets/css', file);
                                var data = fs.readFileSync(file, 'base64');
                                return 'url(data:image/png;base64,' + data + ')';
                            });
                        }
                    }, {
                        pattern: /{{ JS }}/g,
                        replacement: function() {
                            return grunt.file.read('bin/default/assets/js/main.js').replace('{{', '{/**/{');
                        }
                    }]
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                style: 'compact',
                unixNewlines: true
            },
            themeDefault: {
                files: [{
                    expand: true,
                    cwd: 'src/default/assets/css',
                    src: '**/*.sass',
                    dest: 'bin/default/assets/css',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                cascade: false
            },
            themeDefault: {
                expand: true,
                src: 'bin/**/*.css',
                dest: './'
            }
        },
        copy: {
            plugin: {
              files: [{
                expand: true,
                cwd: 'src',
                src: ['*.js'],
                dest: 'bin'
              }]
            },
            themeDefault: {
                files: [{
                    expand: true,
                    cwd: 'src/default',
                    src: ['**/*.hbs', '**/*.png'],
                    dest: 'bin/default'
                }]
            },
            themeDefault2Minimal: {
                files: [{
                    expand: true,
                    cwd: 'src/default/partials',
                    src: ['**/*.hbs'],
                    dest: 'bin/minimal/partials'
                }]
            },
            themeMinimal: {
                files: [{
                    expand: true,
                    cwd: 'src/minimal',
                    src: ['**/*.hbs'],
                    dest: 'bin/minimal'
                }]
            }
        },
        watch: {
            js: {
                files: ['src/default/assets/js/src/**/*.ts'],
                tasks: ['js']
            },
            css: {
                files: ['src/default/assets/css/**/*'],
                tasks: ['css']
            },
            default: {
                files: ['src/default/**/*.hbs'],
                tasks: ['copy', 'string-replace']
            },
            minimal: {
                files: ['src/minimal/partials/**/*.hbs', 'src/minimal/templates/**/*.hbs'],
                tasks: ['copy:themeMinimal']
            },
            minimalLayout: {
                files: ['src/minimal/layouts/default.hbs'],
                tasks: ['string-replace:themeMinimal']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-ts');

    grunt.registerTask('css', ['sass', 'autoprefixer']);
    grunt.registerTask('js', ['ts:themeDefault', 'uglify']);
    grunt.registerTask('default', ['copy', 'css', 'js', 'string-replace']);
};
