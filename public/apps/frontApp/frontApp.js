(function (angular) {
    'use strict';
    angular.module('frontApp', ['core','vcRecaptcha']);
    var compareTo = function() {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };

                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };
    };

    angular.module("frontApp").directive("compareTo", compareTo);



})(angular);

