printRange(2, 10, 2);

function printRange(start, stop, iterate) {
  for (var i = start; i < stop; i += iterate){
      console.log(i);
  }
}

//print range starting at "Start" and end at "end" by the "iterate" amount
