(function () {
    "use strict";
    function preferenceController() {
        var vm = this;
        vm.title = "Preference";
        vm.items = [
            { name: "one", age: 30 },
            { name: "two", age: 27 },
            { name: "three", age: 50 }
        ];
    }
    angular.module("myinfoSite").controller("preferenceController", preferenceController);
}());
