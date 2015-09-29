module.exports = function(grunt) {
    function include(patterns, regexp, replace) {
        regexp = new RegExp(regexp);
        return grunt.file.expandMapping(patterns).map(function(file) {
            return file.dest;
        });
    }
    var version = (function() {
        var now = new Date,
            version = {
                year: now.getFullYear(),
                month: now.getMonth() + 1,
                date: now.getDate(),
                hour: now.getHours(),
                minute: now.getMinutes()
            };
        ['month', 'date', 'hour', 'minute'].forEach(function(key) {
            if (version[key] < 10) {
                version[key] = '0' + version[key];
            }
        });
        return [version.year, version.month, version.date, version.hour, version.minute].join('');
    })();
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {},
            dist: {
                src: [],
                dest: 'public/dist/main.js'
            }
        },
        uglify: {
            compress: {
                files: {
                    'public/dist/main.js': ['public/dist/main.js']
                },
                options: {
                    mangle: true
                }
            }
        },
        less: {
            development: {
                options: {
                    modifyVars: {
                        version: '?' + version
                    }
                },
                files: {
                    'public/dist/gameteam.css': 'public/css/gameteam.less'
                }
            },
            production: {
                options: {
                    modifyVars: {
                        version: '?' + version
                    }
                },
                files: {
                    'public/dist/gameteam.css': 'public/css/gameteam.less'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'public/dist/gameteam.css': ['public/dist/gameteam.css']
                }
            }
        },
        ngtemplates: {
            game: {
                cwd: 'public',
                src: 'template/**.html',
                dest: 'public/dist/template.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask("default", ['ngtemplates', 'less']);
    grunt.registerTask("release", []);
};