(function () {
    angular
        .module('customersApp')
        .controller('OrdersController', OrdersControllerFunc);

    // Dependencies for Controller
    OrdersControllerFunc.$inject = ['$routeParams', 'customersFactory'];

    function OrdersControllerFunc($routeParams, customersFactory) {

        var customerId = $routeParams.customerId;

        var self = this;

        self.customer = null;

        function init() {
            customersFactory.getCustomer(customerId)
                .success(function(customer){
                    self.customer = customer;
                })
                .error(function(data, status, headers, config){
                    // handle error
                });
        }

        init();
    }
})();