// Karma configuration

/**

El orden de nuestros archivos dentro de la propiedad files es importante 
ya que determina el orden en el que se cargan en el navegador cuando se ejecuta Karma. 

Es por eso que Angular y todo su código relacionado se colocan arriba, 
    luego los archivos de la aplicación, 
        y finalmente los archivos de prueba.

*/

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // aCCESO A LOS ARCHIVOS
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './public/scripts/services/service.clubs.js',
      './public/scripts/services/service.suscribers.js',
      './public/scripts/config/app.js',
      './public/scripts/config/config.js',
      './test/api.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
