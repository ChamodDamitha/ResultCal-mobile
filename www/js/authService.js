angular.module('AuthService',[])

.service('Auth',function () {
    var vm=this;
    vm.loggedUser={name:'Chamod Samarajeewa',indexno:'140542',password:'1234'};

    vm.login=function (loginData) {
        //must be checked in database and loaded
        if(loginData.indexno==vm.loggedUser.indexno && loginData.password==vm.loggedUser.password)
        {
            return true;
        }
        return false;
    }

    vm.logout=function(){
        vm.loggedUser=null;
    }


})

;
