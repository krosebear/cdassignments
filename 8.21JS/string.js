

function RemoveSpaces(str) {
  var strnew = "";
  var x = 0;
  for (var i = 0; i < str.length; i++) {
    if (str(i) !== '') {
      strnew(x) = str(i);
      x++;
    }
    console.log(strnew);
  }
}
RemoveSpaces ("Coding Dojo");
