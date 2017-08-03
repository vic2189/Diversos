(function () {
    //var app = angular.module("app1", ["ngRoute"]);

    //app.controller("HomeController", function ($scope) {
    //    $scope.Mensagem = "Hello world!";

    //});

    //var app = angular.module('app1', ['ngGrid']);
    //app.controller('HomeController', function ($scope) {
    //    $scope.myData = [{ name: "Moroni", age: 50 },
    //    { name: "Tiancum", age: 43 },
    //    { name: "Jacob", age: 27 },
    //    { name: "Nephi", age: 29 },
    //    { name: "Enos", age: 34 }];
    //    $scope.gridOptions = { data: 'myData' };
    //});

    var app = angular.module("app1", ['ngGrid']);

    app.controller('HomeController', function ($scope, $http) {
        $scope.Data = [];       
        $http.get('/Home/GetPessoas').then(function (data, status, headers, config) {
            $scope.Data = [{ name: "Moroni", age: 50 },
        { name: "Tiancum", age: 43 },
        { name: "Jacob", age: 27 },
        { name: "Nephi", age: 29 },
        { name: "Enos", age: 34 }];

        }, function (error) {
            console.log(data);
        });
        $scope.gridOptions = {
            data: 'Data',
            columnDefs: [
                { field: 'Nome', displayName: 'Nome' },
                { field: 'Idade', displayName: 'Idade' }
            ]
        };
    });

})();