require.config({
    paths: {
        'jquery': '../vendor/jquery/jquery',
        'underscore': '../vendor/underscore-amd/underscore',
        'backbone': '../vendor/backbone-amd/backbone',
        'text': '../vendor/text/text',
        'Handlebars': '../vendor/handlebars/handlebars'
    },
    shim: {
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['backbone', 'scripts/routers'], function (Backbone, Routers) {
    var routers = new Routers();
    Backbone.history.start({ pushState: true });
});
