function IndexController($scope, Product) {
    Product.getProduct().then(function(responseData) {
        $scope.products = responseData.data;
    });
};
app.controller('IndexController', IndexController);