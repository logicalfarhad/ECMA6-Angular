(function () {
    "use strict";
    function favoriteController() {
        var vm = this;
        vm.title = "favorites";
    }
    angular.module("myinfoSite").controller("favoriteController", favoriteController);
}());
