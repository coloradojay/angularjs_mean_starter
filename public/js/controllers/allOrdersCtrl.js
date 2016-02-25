(function () {
    angular
        .module('customersApp')
        .controller('AllOrdersController', allOrdersCtrl);

    allOrdersCtrl.inject = ['customersFactory'];

    function allOrdersCtrl(customersFactory) {
        var self = this;

        self.orders = null;
        self.ordersTotal = 0.0;
        self.totalType = 0;

        function init() {
            customersFactory.getOrders()
                .success(function (orders) {
                    self.orders = orders;
                    getOrdersTotal();
                })
                .error(function (data, status, headers, config) {
                    // handle the error
                });
        }

        function getOrdersTotal() {
            var total = 0;

            for (var i = 0; i < self.orders.length; i++) {
                total += self.orders[i].total;
            }

            self.ordersTotal = total;
            self.totalType = (self.ordersTotal > 100) ? 'success' : 'danger';
        }

        init();
    }
})();