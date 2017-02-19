(function(angular){
    'use strict';

    /**
    * @memberof ngmap
    * @ngdoc controller
    * @name MeetCtrl
    */

    angular
        .module('MeetupsApp')
        .controller('MeetCtrl', MeetCtrl)

    MeetCtrl.$inject = [];

    function MeetCtrl(){
        /* jshint validthis:true */
        var vm = this;
        vm.meetupsData = {
            'name' : 'AngularJS Meetup',
            'place' : 'Bangalore'
        };
        
        activate();

        function activate() { }
    }
})(angular);