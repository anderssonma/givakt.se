module.exports = function(grunt) {

	// Configuration goes here
  grunt.initConfig({
  	
  	pkg: grunt.file.readJSON('package.json'),
   
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
    },

  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');

  // Define your tasks here
  grunt.registerTask('default', ['jshint']);

};