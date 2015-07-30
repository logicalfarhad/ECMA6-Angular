(function () {
   function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("preference", {
                url: "/home",
                templateUrl: "Scripts/app/views/preference.html",
                controller: "preferenceController",
                controllerAs: 'vm'
            })
            .state("order", {
                url: "/order",
                templateUrl: "Scripts/app/views/order.html",
                controller: "orderController",
                controllerAs:"vm"
            })
            .state("request", {
                url: "/request",
                templateUrl: "Scripts/app/views/inforequest.html",
                controller: "requestController",
                controllerAs:"vm"
            })
            .state("favorite", {
                url: "/favorite",
                templateUrl: "Scripts/app/views/favorite.html",
                controller: "favoriteController",
                controllerAs: "vm"
            });
        $locationProvider.html5Mode(true);
    }
    angular.module("myinfoSite").config(config);
}());