angular.module('starter')

.controller('studentController',function ($scope,$state,$location,Auth) {
    var vm=this;
    vm.student;
    vm.loginData={};
    vm.login=function () {
        if(Auth.login(vm.loginData)){
            vm.student=Auth.loggedUser;
            //need confirm
            $state.go('home.results',{semester:'Semester1'});
        }
        //toast login failed
    };

    vm.logout=function(){
        vm.student=null;
        Auth.logout();
        $state.go('home.login');
    };

    vm.isLogged=function () {
        if(Auth.loggedUser!=null)return true;
        return false;
    };

})

.controller('semesterController',function ($scope,$state,$ionicPopup) {
    //temporary
    var vm=this;
    vm.editSubject=editSubject;
    vm.finishEditSubject=finishEditSubject;
    vm.addSubject=addSubject;
    vm.finishAddSubject=finishAddSubject;
    vm.deleteSubject=deleteSubject;

    vm.semester={semNo:4,subjects:[
        {name:'Maths',credit:'3.0',grade:'A+'},
        {name:'Science',credit:'2.0',grade:'B-'},
        {name:'History',credit:'1.0',grade:'A'},
        {name:'Physics',credit:'2.5',grade:'C+'},
        {name:'Chemistry',credit:'2.0',grade:'A-'}]};

    vm.selectedSubject={name:"",modulecode:"",credit:"",grade:""};

    function editSubject(subject) {
        vm.selectedSubject=subject;

        $state.go('home.editSubject',{semester:'Semester'+vm.semester.semNo,subjectname:vm.selectedSubject.name});
    };

    function finishEditSubject() {
        $state.go('home.results',{semester:'Semester'+vm.semester.semNo});
    }
    
    function addSubject() {
        vm.selectedSubject={};
        $state.go('home.addSubject',{semester:'Semester'+vm.semester.semNo});
    }

    function finishAddSubject() {
        vm.semester.subjects.push(vm.selectedSubject);
        $state.go('home.results',{semester:'Semester'+vm.semester.semNo});
    }

    function deleteSubject(subject) {
        var confirmPopup=$ionicPopup.confirm({
            title:'Delete',
            template:'Are you sure you want to delete '+subject.name+' subject ?'
        });
        confirmPopup.then(function (res) {
            if(res)
            {
                var i=vm.semester.subjects.indexOf(subject);
                vm.semester.subjects.splice(i,1);

            }
        });

    }
});