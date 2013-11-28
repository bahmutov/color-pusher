module.exports = function (grunt) {

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', 'testing', function () {
    require('./index');
    grunt.task.run('clean-console');
  });

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

    develop: {
      server: {
        file: 'index.js',
        cmd: 'node'
      }
    },

    'clean-console': {
      all: {
        options: {
          url: 'http://localhost:3000'
        }
      }
    }
  });

  grunt.registerTask('default', ['sync', 'jshint', 'complexity', 'readme', 'test']);
};
