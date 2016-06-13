app.factory('getColor', function ($http) {
    return {
        async: function () {
            //$http returns a promise, which has a then function, which also returns a promise
            return $http.get("json/color.json").then(function (response) {
                return response.data;
            });
        }
    };
});

app.factory('getDesign', function ($http) {
    return {
        async: function () {
            //$http returns a promise, which has a then function, which also returns a promise
            return $http.get("json/design.json").then(function (response) {
                return response.data;
            });
        }
    };
});

app.factory('getPlacement', function ($http) {
    return {
        async: function () {
            //$http returns a promise, which has a then function, which also returns a promise
            return $http.get("json/placement.json").then(function (response) {
                return response.data;
            });
        }
    };
});

app.factory('getShirt', function ($http) {
    return {
        async: function () {
            //$http returns a promise, which has a then function, which also returns a promise
            return $http.get("json/shirt.json").then(function (response) {
                return response.data;
            });
        }
    };
});

app.factory('getSize', function ($http) {
    return {
        async: function () {
            //$http returns a promise, which has a then function, which also returns a promise
            return $http.get("json/size.json").then(function (response) {
                return response.data;
            });
        }
    };
});