module.exports = function (grunt) {

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js', 'index.js', 'src/*.js', 'libs/check-types.color.js'
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

    jsonlint: {
      all: {
        src: [ 'package.json', 'bower.json' ]
      }
    },

    'gh-pages': {
      options: {},
      src: [
        'index.html',
        'README.md',
        'bower_components/angular/angular.js',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery/jquery.min.js',
        'bower_components/jquery/jquery.min.map',
        'bower_components/jquery-minicolors/jquery.minicolors.css',
        'bower_components/jquery-minicolors/jquery.minicolors.js',
        'bower_components/jquery-minicolors/jquery.minicolors.png',
        'bower_components/angular-minicolors/angular-minicolors.js',
        'libs/jquery.xcolor.js',
        'libs/check-types.min.js',
        'libs/check-types.color.js',
        'libs/ui-bootstrap-tpls-0.7.0.min.js',
        'src/*.js'
      ]
    }

  });

  grunt.registerTask('default', ['sync', 'jsonlint', 'jshint', 'complexity', 'readme']);
};
