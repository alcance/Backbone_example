define([
       'backbone',
       'Handlebars',
       'scripts/views/placeView'
    ], function (Backbone, Handlebars, PlaceView) {
        var ListView = Backbone.View.extend({
            el : '#list',

            initialize : function () {
                this.listenTo(this.collection, 'loaded', this.render);
            },

            render : function () {
                var self = this;
                this.collection.each(function (place) {
                    self.$el.append(new PlaceView({ model: place }).render());
                });
            }
        });

        return ListView;
    });
