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
    },

    uglify: {
      options: {
        mangle: {
          except: ['$', 'google']   // Variable names that shouldn't be compressed
        },
        report: 'min',
        preserveComments: 'false'
      },
      build: {
        files: {
          'dist/js/scripts.min.js': ['js/custom.js', 'js/projects.js']
        }
      }
    },

    imagemin: {
      build: {
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/img'               // Destination path prefix
        }]
      }
    },

    // Some typical JSHint options and globals
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
    },

    csslint: {
      src: ['dist/css/*.css']
    },

    clean: {
      build: 'dist/*'
    },

    copy: {
      build: {
        files: [{
          expand: true,
          dest: 'dist/',
          src: [
            '*.html',
            'font/*',
            'js/vendor/*',
            'css/vendor/*'
          ]
        }]
      }
    }

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Define your tasks here
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('lint', [
    'csslint'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jshint',
    'autoprefixer', 
    'uglify', 
    'imagemin',
    'copy'
  ]);

};