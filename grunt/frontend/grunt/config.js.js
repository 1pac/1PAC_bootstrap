module.exports = {
    //jslint:     require('./grunt/jslint'),
    qunit: {
        js_all: ['<%= specPath %>/js/*.test.html'],
    },
    concat: {
        //create modules.js
        js_lib_vendor: {
            files: {
                '<%= destPath %>/js/lib/vendor.js': ['<%= srcPath %>/js/lib/vendor/*.js'],
            }
        },
        //create module.js
        js_lib_module: {
            files: {
                '<%= destPath %>/js/lib/module.js': ['<%= srcPath %>/js/lib/module/*.js'],
            }
        },
    },
    uglify: {
        options: {
            mangle: false,
            compress: false,
            beautify: true
        },
        //copy module.js to public
        js_lib_module: {
            files: {
                '<%= destPath %>/js/lib/module.js': ['<%= destPath %>/js/lib/module.js']
            }
        },
        //copy other js-file to public
        js: {
            files: [{
                expand: true,
                cwd: '<%= srcPath %>/js',
                src: ['**/*.js', '!lib/**/*.js', '!shared/**/*.js', '!_*.js'],
                dest: '<%= destPath %>/js'
            }]
        }
    },
    copy: {
        //copy vendor.js to public
        js: {
            files: [{
                expand: true,
                cwd: '<%= destPath %>/js',
                src: ['**/*.js'],
                dest: '<%= exportPath %>/js'
            }]
        }
    }
}