/**
 * Checkout controller
 */
app.controller('CheckoutCtrl', function ($scope, totalAmount) {
    $scope.totalAmount = totalAmount;

    $scope.onSubmit = function () {
        $scope.processing = true;
    };
});