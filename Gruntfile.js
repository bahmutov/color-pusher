module.exports = function (grunt) {
  require('time-grunt')(grunt);

  var pkg = grunt.file.readJSON('package.json');

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  var userConfig = require('./build.config.js');

  var taskConfig = {
    pkg: pkg,

    clean: ['<%= destination_dir %>/bower_components', 'tmp'],

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
        'favicon.png',
        'bower_components/angular/angular.js',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap/dist/fonts/*',
        'bower_components/jquery/jquery.min.js',
        'bower_components/jquery/jquery.min.map',
        'color-pusher.js',
        'color-pusher.css',
        'jquery.minicolors.png'
      ]
    },

    /* convert AngularJs html templates to cached JavaScript */
    html2js: {
      main: {
        options: {
          base: 'src',
          module: '<%= pkg.name %>.templates'
        },
        src: [ 'src/color-pusher.tpl.html' ],
        dest: 'tmp/<%= pkg.name %>.templates.js'
      }
    },

    concat: {
      js: {
        options: {},
        src: [
          '<%= vendor_files.js %>',
          'tmp/*.js',
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
      all: {
        files: [
          {
            expand: true,
            src: [
              'bower_components/bootstrap/dist/css/bootstrap.min.css',
              'bower_components/bootstrap/dist/fonts/*',
              'bower_components/jquery/jquery.min.js',
              'bower_components/jquery/jquery.min.map',
              'bower_components/angular/angular.js',
              'index.html',
              'favicon.png',
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

  grunt.registerTask('build', ['clean', 'html2js', 'concat', 'copy']);
  grunt.registerTask('default', ['sync', 'jsonlint', 'nice-package', 'jshint',
    'complexity', 'readme', 'build']);
};
