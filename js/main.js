var a = [$(".a1"), $(".a2"), $(".a3"),$(".a4"),$(".a5"),$(".a6"),$(".a7"),$(".a8"),$(".a9")];
var b = [$(".b1"), $(".b2"), $(".b3"), $(".b4"), $(".b5"), $(".b6"), $(".b7"), $(".b8"), $(".b9")];
var i = 0;

while(i < 35){ // Make sure at least 35 squares are filled
  console.log("start over")
  var works = 1;
  var rowA = Math.floor(Math.random() * a.length); // pick a random row
  var rowB = Math.floor(Math.random() * b.length);
  var randCell = a[rowA][0].children[rowB].children[0]; // pick random cell
  var randNumber = (Math.floor(Math.random() * 9) + 1); 

  var worksRow = checkRow(rowA, randNumber);
  var worksColumn = checkColumn(rowB, randNumber);
  var worksTile = checkTile(rowA, rowB, randNumber);

  if(worksRow && worksColumn && worksTile){
    inputValue(randCell, randNumber);
  }
}

$("input").keydown(function(event){
	if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57){
    event.preventDefault();
  }
});

$("#checkButton button").click(function(){
  var single = true;
  $("td").each(function(cell){
    var rowA = $(this).parent().index();
    var rowB = $(this).index();
    var cellValue = $(this).val();
    var worksRow = checkRow(rowA, cellValue);
    var worksColumn = checkColumn(rowB, cellValue);
    var worksTile = checkTile(rowA, rowB, cellValue);
    if(worksRow && worksColumn && worksTile){
    }
    else{
      single = false;
    }
  })
  if(single == false){
    alert("fail")
  }
  else{
    alert("pass")
  }
});

function checkRow(A, valueCheck){
  var aCells = [].slice.call(a[A][0].children) // Create an array of every cell
  var single;
  aCells.forEach(function (cell) {
    if (valueCheck == cell.children[0].value) { // if new value already exists in row, do not input
      single = false;
    }
  });
  if(single == false){
    return false;
  }
  else{
  return true;
  }
};

function checkColumn(B, valueCheck){
  var single = true;
  a.forEach(function (row) {
    if (valueCheck == row[0].children[B].children[0].value) {
      // works = 0;
      single = false;
    }
  });
  if(single == false){
    return false;
  }
  else{
  return true;
  }
};

function checkTile(A, B, valueCheck){
  if (((A == 0) || (A == 3) || (A == 6)) && ((B == 0) || (B == 3) || (B == 6))) {
    if (valueCheck == (a[A + 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B + 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 2][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 2][0].children[B + 2].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 1) || (A == 4) || (A == 7)) && ((B == 0) || (B == 3) || (B == 6))) {
    if (valueCheck == (a[A + 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B + 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B + 2].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 2) || (A == 5) || (A == 8)) && ((B == 0) || (B == 3) || (B == 6))) {
    if (valueCheck == (a[A - 2][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 2][0].children[B + 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B + 2].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 0) || (A == 3) || (A == 6)) && ((B == 1) || (B == 4) || (B == 7))) {
    if (valueCheck == (a[A + 2][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 2][0].children[B - 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 0) || (A == 3) || (A == 6)) && ((B == 2) || (B == 5) || (B == 8))) {
    if (valueCheck == (a[A + 2][0].children[B - 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 2][0].children[B - 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B - 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 1) || (A == 4) || (A == 7)) && ((B == 1) || (B == 4) || (B == 7))) {
    if (valueCheck == (a[A - 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 1) || (A == 4) || (A == 7)) && ((B == 2) || (B == 5) || (B == 8))) {
    if (valueCheck == (a[A - 1][0].children[B - 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B - 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A + 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 2) || (A == 5) || (A == 8)) && ((B == 1) || (B == 4) || (B == 7))) {
    if (valueCheck == (a[A - 1][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 2][0].children[B + 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 2][0].children[B - 1].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
  else if (((A == 2) || (A == 5) || (A == 8)) && ((B == 2) || (B == 5) || (B == 8))) {
    if (valueCheck == (a[A - 1][0].children[B - 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 1][0].children[B - 1].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 2][0].children[B - 2].children[0].value)) {
      return false;
    }
    else if (valueCheck == (a[A - 2][0].children[B - 1].children[0].value)) {
      return false;
    }
    else {
      return true;
    }
  }
};

function inputValue(cell, newValue){
  if (cell.value == "") { // if empty and not existing in the row
    cell.value = newValue; // Fill with random value
    cell.disabled = true;
    i++;
  }
};