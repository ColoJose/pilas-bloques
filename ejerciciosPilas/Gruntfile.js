module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    notify_hooks: {
                    options: {
                               enabled: true,
                               max_jshint_notifications: 5,
                               success: false,
                               duration: 3
                             }
    },
    typescript: {
      base: {
        src: ['src/**/*.ts'],
        dest: 'compilados/ejerciciosPilas.js',
        options: {
          module: 'commonjs',
          target: 'es5',
          rootDir: 'src',
          sourceMap: false,
          fullSourceMapPath: false,
          declaration: false,
          comments: true,
          }
        }
      },
    watch: {
      scripts: {
        files: ['src/**'],
        tasks: ['clear', 'typescript', 'concat'],
      }
    },
    open: {
        dev: {
            path: 'src/visorEjercicios.html'
        }
    },
    shell: {
      copiarPilasweb: {
        command: 'cp ../pilasweb/public/pilasweb.js compilados/pilasweb.js'

      },
    	copiarCabecerasPilas: {
		command: 'cp ../pilasweb/public/pilasweb.d.ts dependencias/pilasweb.d.ts'
	},
	clear: {
		command: 'clear'
	}
    }
  });

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('clear', ['shell:clear']);

  grunt.registerTask('pilas', ['shell:copiarPilasweb', 'shell:copiarCabecerasPilas']);

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['typescript', 'pilas', 'open']);

  grunt.loadNpmTasks('grunt-notify');
  grunt.task.run('notify_hooks');
};
