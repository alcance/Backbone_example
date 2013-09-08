define([
       'backbone',
       'scripts/models/placeModel'
    ], function (Backbone, PlaceModel) {
        var PlaceCollection = Backbone.Collection.extend({
            model: PlaceModel,

            url: 'http://give.jetsapps.net/v1/place/near/',

            parse: function (data) {
                return data.results;
            }
        });

        return PlaceCollection;
    });
