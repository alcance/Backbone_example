define([
       'backbone',
       'Handlebars',
       'text!template/placeTemplate.hdb'
    ], function (Backbone, Handlebars, placeTemplate) {
        var PlaceView = Backbone.View.extend({
            tagName: 'li',

            events: {
                'click h2': 'show'
            },

            template: Handlebars.compile(placeTemplate),

            render: function () {
                return this.$el.html(this.template(this.model.toJSON()));
            },

            show: function () {
                var url = "detail/" + this.model.get('id');
                Backbone.history.navigate(url, { trigger: true });
            }
        });

        return PlaceView;
    })
