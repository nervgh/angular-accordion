'use strict';


angular


    .module('app', ['angularAccordion'])


    .factory('app', [
        'Accordion',
        function(Accordion) {
            var app = {
                items: [
                    {id: 1, title: 'Arnold'},
                    {id: 2, title: 'Dave'},
                    {id: 3, title: 'Mike'},
                    {id: 4, title: 'Stan'}
                ]
            };
            var keys = app.items.map(function(item) {
                return item.id;
            });

            app.accordion = new Accordion(keys);

            return app;
        }
    ])


    .controller('AppController', [
        '$scope',
        'app',
        function(scope, app) {
            scope.app = app;
        }
    ])