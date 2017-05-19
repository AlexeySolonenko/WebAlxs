'use strict';

module.exports = function(grunt) {
  // var concat = require('./grunt/concat.js');
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
      }
      ,basic:{
        src: ['lib/<%= pkg.name %>.js','lib/*.js'],
        dest: 'dist/<%= pkg.name %>.js', 
      }
      ,extras:{
        src: '*.js',
        dest: 'img/sososo.js',
      }
    }
    ,uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      },
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        options: {
          jshintrc: 'lib/.jshintrc'
        },
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    }
     /* Clear out the images directory if it exists */
    ,clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    }
    ,responsive_images:{
      //options:{
        //engine:'im',
      //}
      respimg1:{
        options:{
          sizes:[
            {
              width: 500
             ,suffix:"_500px_q100"
            },{
              width: 800
              ,suffix:"_800px_q100"
            },{
              width: 1100
              ,suffix:"_1100px_q100"
            },{
              width: 500
             ,suffix:"_500px_q040"
             ,quality:40
            },{
              width: 800
              ,suffix:"_800px_q040"
              ,quality:40
            },{
              width: 1100
              ,suffix:"_1100px_q040"
              ,quality:40
            }
            ]}
        ,files:[{
          //'tennis_001.jpg':'img/tennis_009.jpg'
          expand:true
          ,src: ['**.{jpg,gif,png}']
          ,cwd: 'images_src/'
		      ,dest: 'images/'
        }]
        //,src:'tennis_001.jpg'
		    //,dest:'img/tennis_009.jpg'
      }
      ,respimg2:{
        options:{}
        ,files:[{
          expand: true
          ,src: ['**.{jpg,gif,png}']
          ,cwd: 'img/' //current working directory
          ,dest: 'img/cnvtd/'
        }]
        //,src:'tennis_002.jpg'
		    //,dest:'img/tennis_008.jpg'
      }
      ,dev: {
        options: {
          // engine: 'im',
          sizes: [{
            
            //Change these:
            
            width: 800,
            suffix: '_cmpd',
            quality: 45
            
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
    
      pagespeed: {
        options: {
          nokey: true,
          url: "https://developers.google.com"
        },
        prod: {
          options: {
            //url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
            url:"http://studysnami.ru/index.php/ru/",
            locale: "en_GB",
            strategy: "desktop",
            threshold: 1
          }
        },
        paths: {
          options: {
            paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
            locale: "en_GB",
            strategy: "desktop",
            threshold: 80
          }
        }
      }
  });
  
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  
  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'concat', 'uglify']);
  grunt.registerTask('basic',['concat:basic']);
  //grunt.registerTask('extras',['concat:extras']);
  grunt.registerTask('respimg11',['responsive_images:respimg1']);
  grunt.registerTask('respimg12',['responsive_images:respimg2']);
  grunt.registerTask('optim2', ['clean', 'mkdir', 'copy', 'responsive_images:dev']);
};
