var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  console.log(connect.static(require('path').resolve(dir)));
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

	// Configuration goes here
  grunt.initConfig({
  
    pkg: grunt.file.readJSON('package.json'),
   
    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      livereload: {
        files: ['css/**/*'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, 'prototyp')
            ];
          }
        }
      }
    }, 

    open: {
      server: {
        url: 'http://localhost:9000'
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'css'
          // noLineComments: true
        }
      }
    },

    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    },

    // Some typical JSHint options and globals
    jshint: {
    	files: ['js/projects.js', 'js/custom.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
        	console: true,
        	Modernizr: true,
        	jQuery: true,
        	$: true
      	}
      }
    }

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');

  // Define your tasks here
  grunt.registerTask('default', ['sass', 'watch']);

};