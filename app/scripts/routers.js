define([
       'backbone',
       'scripts/collections/placeCollection',
       'scripts/views/listView'
    ], function (Backbone, PlaceCollection, ListView) {
        var placeCollection = new PlaceCollection();

        var Routers = Backbone.Router.extend({
            routes: {
                '': 'homepage',
                'detail/:id': 'detail'
            },

            homepage: function () {
                var listView = new ListView({
                    collection: placeCollection
                });

                placeCollection.fetch({
                    data: {
                        longitude: 0.1,
                        latitude: 0.1,
                        distance: 1000000000000
                    },
                    success: function () {
                        placeCollection.trigger('loaded');
                    }
                });
            },

            detail: function (id) {
                var place = placeCollection.get(id);
                console.log(place);
            }
        });

        return Routers;
    });
