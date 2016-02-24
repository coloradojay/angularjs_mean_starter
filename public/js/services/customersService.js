(function () {

    angular
        .module('customersApp')
        .service('customersService', customersSrvc);

    function customersSrvc() {

        var self = this;

        var customers = [
            {
                id: 1,
                joined: '2015-01-01',
                name: 'Mike',
                city: 'Los Angeles',
                orderTotal: '975.00',
                orders: [{id: 1, product: 'Shoes', total: 975.00}]
            },
            {
                id: 2,
                joined: '2001-01-01',
                name: 'John',
                city: 'Whitter',
                orderTotal: '5676.00',
                orders: [{id: 1, product: 'Bats', total: 5676.00}]
            },
            {
                id: 3,
                joined: '1974-01-01',
                name: 'Neil',
                city: 'Corona',
                orderTotal: '100.00',
                orders: [{id: 1, product: 'Gloves', total: 100.00}]
            },
            {
                id: 4,
                joined: '2007-08-31',
                name: 'Phia D Mia',
                city: 'Whittier',
                orderTotal: '10000.00',
                orders: [{id: 1, product: 'Dress', total: 5000.00}, {id: 2, product: 'Shoes', total: 5000.00}]
            }
        ];

        self.getCustomers = function () {
            return customers;
        };

        self.getCustomer = function (customerId) {
            for (var i = 0; i < customers.length; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }
            return {};
        };

    }
})();