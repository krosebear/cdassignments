// for (var i = 0; i < 256; i++){
//   console.log(i);
// }
//
// for (i=0; i<256; i++){
//   if (i%2!==0){
//     console.log(i);
//   }
// }
arr = [5, 7, 8, 9, 10, 3, 4, 5]

function shiftarrleft() {
  for (var i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
    arr[arr.length - 1] = 0;
    console.log(arr);
}

shiftarrleft(arr);
