//task array
var myTasks = [];


class HomeController {



//submit task from input value
submitTask(){
//push new task into array
  myTasks.push({name: this.myTask, checked: false});

}
constructor(myTask, checkedTask){
this.myTasks = myTasks;

}


}



angular.module("myapp").controller("HomeController", HomeController);
