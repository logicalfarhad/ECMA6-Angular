(function () {
    "use strict";
    function requestController() {
        var vm = this;
        vm.title = "request";
    }
    angular.module("myinfoSite").controller("requestController", requestController);
}());
