(function (angular, window) {
    'use strict';
    angular.module('core').service('userService', userService);
    userService.$inject = ['$http' ,'advFactory'];

    function userService($http, advFactory) {
        return function (data) {
            var Object = data;
            Object.waiting = false;



            Object.sBusinessAccount = function(){
                if (Object.group_id==3){
                    return true;
                }
                return false;
            };


            Object.isPrivateAccount = function(){
                if (Object.group_id==2){
                    return true;
                }
                return false;
            };


            Object.getAdvStat = function(){
                return $http.get('/api/user/adv-stat').then( function(response){
                    return response.data;
                })
            };

            Object.getAdvs = advFactory.getByUser;
            return Object;
        }
    }
})(angular, window);

