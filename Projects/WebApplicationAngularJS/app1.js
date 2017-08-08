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
        $scope.gridOptions = {
            data: 'data',
            columnDefs: [
                { field: 'Name', displayName: 'Nome' },
                { field: 'Idade', displayName: 'Idade' }
            ]
        };
       $http.get('/Home/GetPessoas').then(function (response) {
           $scope.data = response.data

        }, function (error) {
            console.log(data);
        });
        
    });

})();