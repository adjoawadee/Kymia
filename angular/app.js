var app = angular.module('kymiaShopApp', ['ui.bootstrap']);

//app.controller('ShopCtrl',function($scope,$http, $modal){
//    $scope.cart = [];
//
//    $http.get('js/product.json').success(function(response){
//        $scope.products = response.products;
//    });
//
//    $scope.addToCart = function (product) {
//        var found = false;
//        $scope.cart.forEach(function (item) {
//            if (item.id === product.id) {
//                item.quantity++;
//                found = true;
//            }
//        });
//        if (!found) {
//            $scope.cart.push(angular.extend({quantity: 1}, product));
//        }
//    };
//
//    $scope.getCartPrice = function () {
//        var total = 0;
//        $scope.cart.forEach(function (product) {
//            total += product.price * product.quantity;
//        });
//        return total;
//
//        // // Update cookie
//        // $cookieStore.put("Cart_price", total);
//        // alert($cookieStore.get("Cart_price"));
//
//    };
//
//
//
//// $http({
////     url: "/users/i315860/shop/shopnow.html",
////     method: "POST",
////     headers: {
////       'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
////     },
////     data: {cart_price: cartprice}
////   });
//
//
//    $scope.checkout = function () {
//        $modal.open({
//            templateUrl: 'checkout.html',
//            controller: 'CheckoutCtrl',
//            resolve: {
//                totalAmount: $scope.getCartPrice
//                //  $scope.sendToPhp();
//            }
//        });
//    };
//})
//    .controller('CheckoutCtrl', function ($scope, totalAmount) {
//        $scope.totalAmount = totalAmount;
//
//        $scope.onSubmit = function () {
//            $scope.processing = true;
//        };
//    });
