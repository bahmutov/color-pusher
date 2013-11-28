module.exports = function (grunt) {

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js', 'index.js', 'src/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
    },

    complexity: grunt.file.readJSON('complexity.json'),

    readme: {
      options: {
        templates: './docs',
        readme: './docs/README.tmpl.md',
        docs: '.'
      }
    },

    sync: {
      all: {
        options: {
          // sync specific options
          sync: ['author', 'description', 'name', 'version', 'private']
        }
      }
    },

    'gh-pages': {
      options: {},
      src: [
        'index.html',
        'README.md',
        'bower_components/angular/angular.js',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/jquery/jquery.min.js',
        'bower_components/jquery/jquery.min.map',
        'libs/jquery.xcolor.js',
        'libs/check-types.min.js',
        'src/*.js'
      ]
    }

  });

  grunt.registerTask('default', ['sync', 'jshint', 'complexity', 'readme']);
};
