(function () {

    angular
        .module('customersApp')
        .factory('customersFactory', customersFactory);

    customersFactory.inject = ['$http'];

    function customersFactory($http) {

        var factory = {};

        factory.getCustomers = function () {
            return $http.get('/customers');
        };

        factory.getCustomer = function (customerId) {
            return $http.get('/customers/' + customerId);
        };

        return factory;
    }
})();