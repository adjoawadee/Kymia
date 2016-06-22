/**
 * Checkout controller
 */
app.controller('CheckoutCtrl', function ($window, $scope, $location) {
    /**
     * If all data needed is undefined, return to shop.
     */
    if ($location.search().design == undefined || $location.search().color == undefined || $location.search().size == undefined ||
        $location.search().type == undefined || $location.search().position == undefined ||
        $location.search().id == undefined || $location.search().price == undefined) {
        $window.location.href = "/shop.html";
    }

    /**
     * Get parameters from URL
     */
    $scope.design = $location.search().design;
    $scope.color = $location.search().color;
    $scope.size = $location.search().size;
    $scope.type = $location.search().type;
    $scope.position = $location.search().position;
    $scope.preview = $location.search().id;
    $scope.price = $location.search().price;

    /**
     * Navigation Button functions
     */

    $scope.home = function() {
        $window.location.href = "/mainpage.html";
    };

    $scope.shop = function() {
        $window.location.href = "/shop.html";
    };
});