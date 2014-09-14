var connect = require('connect'); 
module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      files: ['scss/**/*.{scss,sass}'],
      tasks: ['sass']
    },
    connect: {
      server: {
        options: {
          port: 8082,
          hostname: '*',
          keepalive: true,
          middleware: [
            function (req, res, next) {
              res.setHeader("Access-Control-Allow-Origin", "*");
              return next();
            },
            connect.static(require('path').resolve('.'))
          ]
        }
      }
    },
    sass: {
      dist: {
        files: {
          'styles/main.css':'scss/main.scss'
        }
      }
    },
    csscomb: {
      dynamic_mappings: {
          expand: true,
          cwd: 'scss/',
          src: ['*.scss'],
          dest: 'scss/'
      }
    }
  });

  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csscomb');

  grunt.registerTask('default', ['sass', 'csscomb']);
  grunt.registerTask('travis', ['sass']);

};