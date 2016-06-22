/**
 * Shop Controller
 */
app.controller('ShopCtrl', function ($window, $location, $scope, $http, getColor, getDesign, getPlacement, getShirt, getSize, getPreview) {
    getColor.async().then(function (respColor) {
        getDesign.async().then(function (respDesign) {
            getPlacement.async().then(function (respPlacement) {
                getShirt.async().then(function (respShirt) {
                    getSize.async().then(function (respSize) {
                        getPreview.async().then(function (respPreview) {
                            /**
                             * Arrays
                             */
                            $scope.design = respDesign;
                            $scope.color = respColor;
                            $scope.placement = respPlacement;
                            $scope.size = respSize;
                            $scope.shirt = respShirt;
                            $scope.imagePreview = respPreview;
                            /**
                             * Fields (Default settings)
                             */
                            $scope.currentDesign = $scope.design[0];
                            $scope.currentColor = $scope.color[0];
                            $scope.currentPlacement = $scope.placement[0];
                            $scope.currentShirt = $scope.shirt[0];
                            $scope.currentSize = $scope.size[0];

                            $scope.currentPreview = getPreview();

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
                                $scope.currentPreview = getPreview();
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
                                $scope.currentPreview = getPreview();
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
                                $scope.currentPreview = getPreview();
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
                                $scope.currentPreview = getPreview();
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
                                $scope.currentPreview = getPreview();
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
                                $scope.currentPreview = getPreview();
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
                                var url = "/checkout.html";
                                var data = "?design=" + $scope.currentDesign.name;
                                data = data + "&color=" + $scope.currentColor.value;
                                data = data + "&size=" + $scope.currentSize.size;
                                data = data + "&type=" + $scope.currentShirt.type;
                                data = data + "&position=" + $scope.currentPlacement.name;
                                data = data + "&id=" + getPreview();
                                data = data + "&price=" + ($scope.preview.design.price +
                                    $scope.preview.placement.price);

                                $window.location.href = url + data;
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

                            /**
                             * Get the correct image out of the preview JSON.
                             * @returns {*}
                             */
                            function getPreview() {
                                var id = $scope.currentShirt.id + "" + $scope.currentDesign.id + "" + $scope.currentPlacement.id;

                                for (var i = 0; i < $scope.imagePreview.length; i++) {
                                    if ($scope.imagePreview[i].id == id) {
                                        return $scope.imagePreview[i].image;
                                    }
                                }
                                return "";
                            }


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
                    });
                });
            });
        });
    });
});