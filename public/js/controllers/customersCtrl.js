(function(){
    angular
        .module('customersApp')
        .controller('CustomersController', CustomersControllerFunc);

    // Dependencies for Controller
    CustomersControllerFunc.$inject = ['$log', 'customersFactory', 'appSettings'];

    function CustomersControllerFunc($log, customersFactory, appSettings){
        var self = this;
        // Default sort by name
        self.sortBy = 'name';
        // Default sort by descending
        self.reverse = false;
        self.customers = [];
        self.appSettings = appSettings;

        function init(){
            customersFactory.getCustomers()
                .success(function(customers){
                    self.customers = customers;
                })
                .error(function(data, status, headers, config){
                    $log.log(data + ' ' + status);
                });
        }

        init();

        self.doSort = function(propName){
            self.sortBy = propName;
            self.reverse = !self.reverse;
        };

    }

})();