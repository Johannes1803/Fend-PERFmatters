module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.initConfig({
		imagemin:{
			static: {
				options: {
					optimizationLevel: 5,
				},
				files: {
					'dist/img/profilepic_optim.jpg': 'img/profilepic.jpg',
					'dist/views/images/pizzeria_optim.jpg': 'views/images/pizzeria.jpg'
				}

			}

		},
		cssmin: {
  			target: {
    			files: [{
      				expand: true,
      				cwd: 'css',
				      src: ['*.css', '!*.min.css'],
				      dest: 'dist/css',
				      ext: '.min.css'
    			}]
  			}
		},
		uglify: {
    		my_target: {
		      files: {
		        'dist/js/perfmatters.min.js': ['js/perfmatters.js']
		      }
		    }
  		},
  		cachebreaker: {
		    dev: {
		        options: {
		            match: ['dist/css/print.min.css', 'dist/img/profilepic_optim.jpg',
		            'dist/js/perfmatters.min.js', 'dist/views/images/pizzeria_optim.jpg',
		            'http://www.google-analytics.com/analytics.js'],
		        },
		        files: {
		            src: ['index.html']
		        }
		    }
		},
		htmlmin: {                                     // Task 
		    dist: {                                      // Target 
		      options: {                                 // Target options 
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files 
		        'dist/index.html': 'index.html',     // 'destination': 'source' 
		      }
		    }
		}

	});
	grunt.registerTask('default', [
		'imagemin',
		'cssmin',
		'uglify',
		'cachebreaker',
		'htmlmin',
		]);
}