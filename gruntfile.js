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
                src: ['public/js/epic.js', 'public/js/popup.js', 'public/dist/main.js'],
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
            production: {
                options: {
                    modifyVars: {
                        version: '?' + version
                    }
                },
                files: {
                    'public/dist/epic.css': 'public/css/epic.less',
                    'public/dist/gameui.css': 'public/css/gameui/main.less'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'public/dist/epic.css': ['public/dist/epic.css']
                }
            }
        },
        ngtemplates: {
            cmpt: {
                cwd: 'public',
                src: 'template/**.html',
                dest: 'public/dist/main.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask("default", ['ngtemplates', 'concat', 'less', 'cssmin']);
    grunt.registerTask("release", ['ngtemplates', 'concat', 'uglify', 'less', 'cssmin']);
};