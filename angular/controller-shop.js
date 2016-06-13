/**
 * Shop Controller
 */
app.controller('ShopCtrl',function($scope,$http){
    /**
     * Arrays
     */
    $scope.cart = [];

    $scope.color = [];
    $scope.design = [];
    $scope.placement = [];
    $scope.shirt = [];
    $scope.size = [];

    /**
     * Instantiation the data
     */
    $http.get('json/design.json').success(function(response){
        $scope.design = response;
    });

    $http.get('json/color.json').success(function(response){
        $scope.color = response;
    });

    $http.get('json/placement.json').success(function(response){
        $scope.placement = response;
    });

    $http.get('json/shirt.json').success(function(response){
        $scope.shirt = response;
    });

    $http.get('json/size.json').success(function(response){
        $scope.size = response;
    });

    /**
     * Fields (Default settings)
     */
    $scope.currentDesign = $scope.design[0];
    $scope.currentColor = $scope.color[0];
    $scope.currentPlacement = $scope.placement[0];
    $scope.currentShirt = $scope.shirt[0];
    $scope.currentSize = $scope.size[0];

    /**
     * Buttons
     */

    $scope.designNext = function(design) {
        var arraySize = $scope.design.length;
        var index = getIndex($scope.design, design);

        if (index != null) {
            if (index + 1 < arraySize) {
                $scope.currentDesign = $scope.design[index+1];
            } else {
                $scope.currentDesign = $scope.design[0];
            }
        }
    };

    $scope.designPrevious = function(design) {
        var arraySize = $scope.design.length;
        var index = getIndex($scope.design, design);

        if (index != null) {
            if (index - 1 >= 0) {
                $scope.currentDesign = $scope.design[index-1];
            } else {
                $scope.currentDesign = $scope.design[arraySize-1];
            }
        }
    };

    $scope.placementNext = function(placement) {

    };

    $scope.placemenPrevious = function(placement) {

    };

    $scope.shirtNext = function(shirt) {

    };

    $scope.shirtPrevious = function(shirt) {

    };


    /**
     * Methods
     */

    /**
     * Get the index of the current item in the array.
     * @param array
     * @param item
     * @returns {*}
     */
    function getIndex(array, item) {
        var arraySize = array.length;
        var currentIndex = null;
        for (var i = 0; i < arraySize; i++) {
            if (array[i] == item) {
                currentIndex = i;
            }
        }
        return currentIndex;
    }
});