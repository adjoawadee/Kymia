/**
 * Shop Controller
 */
app.controller('ShopCtrl', function ($scope, $http, getColor, getDesign, getPlacement, getShirt, getSize) {
    getColor.async().then(function (respColor) {
        getDesign.async().then(function (respDesign) {
            getPlacement.async().then(function (respPlacement) {
                getShirt.async().then(function (respShirt) {
                    getSize.async().then(function (respSize) {
                        /**
                         * Arrays
                         */
                        $scope.design = respDesign;
                        $scope.color = respColor;
                        $scope.placement = respPlacement;
                        $scope.size = respSize;
                        $scope.shirt = respShirt;

                        /**
                         * Fields (Default settings)
                         */
                        $scope.currentDesign = $scope.design[0];
                        $scope.currentColor = $scope.color[0];
                        $scope.currentPlacement = $scope.placement[0];
                        $scope.currentShirt = $scope.shirt[0];
                        $scope.currentSize = $scope.size[0];

                        $scope.cart = null;

                        $scope.preview =
                            {
                                "design": $scope.currentDesign,
                                "color": $scope.currentColor,
                                "placement": $scope.currentPlacement,
                                "size": $scope.currentSize,
                                "shirt": $scope.currentShirt
                            };

                        /**
                         * Buttons
                         */

                        $scope.designNext = function () {
                            var arraySize = $scope.design.length;
                            var index = getIndex($scope.design, $scope.currentDesign);

                            if (index != null) {
                                if (index + 1 < arraySize) {
                                    $scope.currentDesign = $scope.design[index + 1];
                                } else {
                                    $scope.currentDesign = $scope.design[0];
                                }
                            }

                            $scope.preview.design = $scope.currentDesign;
                        };

                        $scope.designPrevious = function () {
                            var arraySize = $scope.design.length;
                            var index = getIndex($scope.design, $scope.currentDesign);

                            if (index != null) {
                                if (index - 1 >= 0) {
                                    $scope.currentDesign = $scope.design[index - 1];
                                } else {
                                    $scope.currentDesign = $scope.design[arraySize - 1];
                                }
                            }

                            $scope.preview.design = $scope.currentDesign;
                        };

                        $scope.shirtNext = function () {
                            var arraySize = $scope.shirt.length;
                            var index = getIndex($scope.shirt, $scope.currentShirt);

                            if (index != null) {
                                if (index + 1 < arraySize) {
                                    $scope.currentShirt = $scope.shirt[index + 1];
                                } else {
                                    $scope.currentShirt = $scope.shirt[0];
                                }
                            }

                            $scope.preview.shirt = $scope.currentShirt;
                        };

                        $scope.shirtPrevious = function () {
                            var arraySize = $scope.shirt.length;
                            var index = getIndex($scope.shirt, $scope.currentShirt);

                            if (index != null) {
                                if (index - 1 >= 0) {
                                    $scope.currentShirt = $scope.shirt[index - 1];
                                } else {
                                    $scope.currentShirt = $scope.shirt[arraySize - 1];
                                }
                            }

                            $scope.preview.shirt = $scope.currentShirt;
                        };

                        $scope.placementNext = function () {
                            var arraySize = $scope.placement.length;
                            var index = getIndex($scope.placement, $scope.currentPlacement);

                            if (index != null) {
                                if (index + 1 < arraySize) {
                                    $scope.currentPlacement = $scope.placement[index + 1];
                                } else {
                                    $scope.currentPlacement = $scope.placement[0];
                                }
                            }

                            $scope.preview.placement = $scope.currentPlacement;
                        };

                        $scope.placementPrevious = function () {
                            var arraySize = $scope.placement.length;
                            var index = getIndex($scope.placement, $scope.currentPlacement);

                            if (index != null) {
                                if (index - 1 >= 0) {
                                    $scope.currentPlacement = $scope.placement[index - 1];
                                } else {
                                    $scope.currentPlacement = $scope.placement[arraySize - 1];
                                }
                            }

                            $scope.preview.placement = $scope.currentPlacement;
                        };

                        $scope.colorBlack = function () {
                            //For now only 2 colors
                            $scope.currentColor = $scope.color[0];
                            $scope.preview.color = $scope.currentColor;
                        };

                        $scope.colorWhite = function () {
                            //For now only 2 colors
                            $scope.currentColor = $scope.color[1];
                            $scope.preview.color = $scope.currentColor;
                        };

                        $scope.sizeXS = function () {
                            //For now only 4 sizes
                            $scope.currentSize = $scope.size[0];
                            $scope.preview.size = $scope.currentSize;
                        };

                        $scope.sizeS = function () {
                            //For now only 4 sizes
                            $scope.currentSize = $scope.size[1];
                            $scope.preview.size = $scope.currentSize;
                        };

                        $scope.sizeM = function () {
                            //For now only 4 sizes
                            $scope.currentSize = $scope.size[2];
                            $scope.preview.size = $scope.currentSize;
                        };

                        $scope.sizeL = function () {
                            //For now only 4 sizes
                            $scope.currentSize = $scope.size[3];
                            $scope.preview.size = $scope.currentSize;
                        };

                        $scope.checkout = function () {
                            console.log($scope.preview);
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
                });
            });
        });
    });
});