(function(angular){
    'use strict';

    angular
        .module('MeetupsApp')
        .controller('MeetCtrl', MeetCtrl)

    MeetCtrl.$inject = ['$location'];

    function MeetCtrl($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})(angular);