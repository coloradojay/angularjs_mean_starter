(function () {
    angular
        .module('customersApp', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/',
                    {
                        controller: 'CustomersController',
                        controllerAs: 'custCtrl',
                        templateUrl: 'views/customers.html'
                    })
                .when('/orders',
                    {
                        controller: 'AllOrdersController',
                        controllerAs: 'allOrderCtrl',
                        templateUrl: 'views/allorders.html'
                    })
                .when('/orders/:customerId',
                    {
                        controller: 'OrdersController',
                        controllerAs: 'orderCtrl',
                        templateUrl: 'views/orders.html'
                    })
                .otherwise({redirectTo: '/'});
            $locationProvider.html5Mode(true);
        }]);
})();