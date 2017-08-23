var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";


// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";

if (MINUTE <=15){
  console.log("It's just after " + HOUR);
}
if (MINUTE >44){
  console.log("It's almost "+ (HOUR+1));
}
if (PERIOD == "PM"){
  console.log("in the evening");
}
if (PERIOD == "AM"){
  console.log("in the morning");
}
