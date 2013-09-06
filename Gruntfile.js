module.exports = function(grunt) {

	// Configuration goes here
  grunt.initConfig({
  
    pkg: grunt.file.readJSON('package.json'),
   
    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/style.scss',
          'css/projects.css': 'sass/projects.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      livereload: {
        files: ['css/*.css'],
        options: {
          livereload: true
        }
      }
    },

    autoprefixer: {
      build: {
        src: 'css/style.css',
        dest: 'dist/css/style.css'
      }
    }

    // Some typical JSHint options and globals
    /*
    jshint: {
    	files: ['js/*.js'],
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
    */

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Define your tasks here
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['autoprefixer']);
};