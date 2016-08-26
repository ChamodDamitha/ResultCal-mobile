app.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
});

    app.controller('PlaylistCtrl', function($scope, $stateParams) {
});

app.controller('studentController',function ($scope) {
    $scope.loginData={};
    $scope.login=function () {
        console.log($scope.loginData);
        window.location.href="/home/Semester1/results";
    }
});

app.controller('semesterController',function ($scope) {
    //temporary
    $scope.semNo=1;
    $scope.subjects=[
        {name:'Maths',grade:'A+'},
        {name:'Science',grade:'B-'},
        {name:'History',grade:'A'},
        {name:'Physics',grade:'C+'},
        {name:'Chemistry',grade:'A-'}
    ];
});