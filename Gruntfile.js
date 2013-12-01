module.exports = function (grunt) {
  require('time-grunt')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  var userConfig = require('./build.config.js');

  var taskConfig = {
    pkg: pkg,

    clean: ['<%= destination_dir %>/bower_components'],

    jshint: {
      all: [
        '*.js', 'src/*.js', 'libs/check-types.color.js'
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

    'nice-package': {
      all: {
        options: {
          license: function (value) {
            return value === 'MIT';
          }
        }
      }
    },

    'gh-pages': {
      options: {
        base: '<%= destination_dir %>'
      },
      src: [
        'index.html',
        'README.md',
        'bower_components/angular/angular.js',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/jquery/jquery.min.js',
        'bower_components/jquery/jquery.min.map',
        'color-pusher.js',
        'color-pusher.css',
        'jquery.minicolors.png'
      ]
    },

    concat: {
      js: {
        options: {},
        src: [
          '<%= vendor_files.js %>',
          '<%= app_files.js %>'
        ],
        dest: '<%= destination_dir %>/<%= pkg.name %>.js'
      },

      css: {
        options: {},
        src: [
          '<%= vendor_files.css %>',
          '<%= app_files.css %>'
        ],
        dest: '<%= destination_dir %>/<%= pkg.name %>.css'
      }
    },

    // make sure index.html example works inside destination folder
    copy: {
      '3rd-party': {
        files: [
          {
            expand: true,
            src: [
              'bower_components/bootstrap/dist/css/bootstrap.min.css',
              'bower_components/jquery/jquery.min.js',
              'bower_components/jquery/jquery.min.map',
              'bower_components/angular/angular.js',
              'index.html',
              'README.md'
            ],
            dest: '<%= destination_dir %>'
          },
          {
            src: 'bower_components/jquery-minicolors/jquery.minicolors.png',
            dest: '<%= destination_dir %>/jquery.minicolors.png'
          }
        ]
      }
    }

  };

  grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

  grunt.registerTask('build', ['clean', 'concat', 'copy']);
  grunt.registerTask('default', ['sync', 'jsonlint', 'nice-package', 'jshint',
    'complexity', 'readme', 'build']);
};
