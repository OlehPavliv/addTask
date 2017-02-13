var task  = angular.module("task",[]);
task.controller("myCtrl",function($scope){
    
    $scope.count = 4 ;
    $scope.taskList = model;
    
    $scope.res =false;
    
    $scope.addItem = function(){
        if($scope.task=='' || !isNaN($scope.task)){
            alert('pls enter valid value');
            return false
        }
        else{
            $scope.taskList.push({task:$scope.task,progress:false});
            $scope.task = '';
            $scope.count++;
        }
   };
    
    $scope.delItem =  function($index){
        var index  = $index;
        $scope.taskList.splice(index,1);
        $scope.count--
    };
    
    $scope.setStyle = function(progress){
        return progress ? "color:green" : "color:red;font-weight:bold";
    };
    
    $scope.showText  = function(progress){
        return progress ? "Done":"No";
    };
    
    $scope.editTask = function($index){
        $scope.index = $index ;
        $scope.item =  $scope.taskList[$scope.index].task;
        $scope.res = true;
        
    };
    
    $scope.saveItem = function(){
       
        $scope.taskList[$scope.index].task = item.value;
    }
});









var model = [
        {
            task:'Learn Html5 Css3',
            progress:true
        },{
            task:'Learn AngularJs',
            progress:false
        },{
            task:'Learn Php',
            progress:false
        },{
            task:'Learn Jquery',
            progress:false
        }
]