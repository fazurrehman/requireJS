//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'js/lib',
    "waitSeconds" : 6, 
    paths: {
        app: '../app',
        bootstrap: 'bootstrap.min'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    },
    optimize: "uglify2",
    removeCombined: true

});
