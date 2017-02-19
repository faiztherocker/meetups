describe('Unit Test: -> Controller -> MeetCtrl', MeetCtrlTest);

function MeetCtrlTest(){    

var $controller;

beforeEach(module('MeetupsApp'));

beforeEach(inject(function(_$controller_){
    $controller = _$controller_('MeetCtrl'); 
}));

it('should be defiend: Controller', function(){
    expect($controller).toBeDefined();
});

}

