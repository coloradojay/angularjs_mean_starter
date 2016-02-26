(function(){
    angular
        .module('customersApp')
        .controller('CustomersController', CustomersControllerFunc);

    // Dependencies for Controller
    CustomersControllerFunc.$inject = ['$log', '$window', 'customersFactory', 'appSettings'];

    function CustomersControllerFunc($log, $window, customersFactory, appSettings){
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

        self.deleteCustomer = function(customerId) {
            customersFactory.deleteCustomer(customerId)
                .success(function(status) {
                    if (status) {
                        for (var i=0,len=self.customers.length;i<len;i++) {
                            if (self.customers[i].id === customerId) {
                                self.customers.splice(i,1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete customer');
                    }

                })
                .error(function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        };

    }

})();