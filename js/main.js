var a = [$(".a1"), $(".a2"), $(".a3"),$(".a4"),$(".a5"),$(".a6"),$(".a7"),$(".a8"),$(".a9")];
var b = [$(".b1"), $(".b2"), $(".b3"), $(".b4"), $(".b5"), $(".b6"), $(".b7"), $(".b8"), $(".b9")];
var i = 0;

while(i < 35){ // Make sure at least 35 squares are filled
  console.log("start over")
  var works = 1;
  var rowA = Math.floor(Math.random() * a.length); // pick a random row
  var rowB = Math.floor(Math.random() * b.length);
  var randCell = a[rowA][0].children[rowB].children[0]; // pick random cell
  var aCells = [].slice.call(a[rowA][0].children) // Create an array of every cell
  randNumber = (Math.floor(Math.random() * 9) + 1); 

  a.forEach(function(row){
    if(randNumber == row[0].children[rowB].children[0].value){
      works = 0;
    }
  });
  
  aCells.forEach(function(cell){
    if(randNumber == cell.children[0].value){ // if new value already exists in row, do not input
     works = 0;
    };
  });

if(((rowA == 0) || (rowA == 3) || (rowA == 6)) && ((rowB == 0) || (rowB == 3) || (rowB == 6))){
  if(randNumber == (a[rowA+1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB+2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+2][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+2][0].children[rowB+2].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 1) || (rowA == 4) || (rowA == 7)) && ((rowB == 0) || (rowB == 3) || (rowB == 6))){
  if(randNumber == (a[rowA+1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB+2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB+2].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 2) || (rowA == 5) || (rowA == 8)) && ((rowB == 0) || (rowB == 3) || (rowB == 6))){
  if(randNumber == (a[rowA-2][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-2][0].children[rowB+2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB+2].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 0) || (rowA == 3) || (rowA == 6)) && ((rowB == 1) || (rowB == 4) || (rowB == 7))){
  if(randNumber == (a[rowA+2][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+2][0].children[rowB-1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 0) || (rowA == 3) || (rowA == 6)) && ((rowB == 2) || (rowB == 5) || (rowB == 8))){
  if(randNumber == (a[rowA+2][0].children[rowB-2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+2][0].children[rowB-1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB-2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 1) || (rowA == 4) || (rowA == 7)) && ((rowB == 1) || (rowB == 4) || (rowB == 7))){
  if(randNumber == (a[rowA-1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 1) || (rowA == 4) || (rowA == 7)) && ((rowB == 2) || (rowB == 5) || (rowB == 8))){
  if(randNumber == (a[rowA-1][0].children[rowB-2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB-2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA+1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 2) || (rowA == 5) || (rowA == 8)) && ((rowB == 1) || (rowB == 4) || (rowB == 7))){
  if(randNumber == (a[rowA-1][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-2][0].children[rowB+1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-2][0].children[rowB-1].children[0].value)){
    works = 0;
  }
}
else if(((rowA == 2) || (rowA == 5) || (rowA == 8)) && ((rowB == 2) || (rowB == 5) || (rowB == 8))){
  if(randNumber == (a[rowA-1][0].children[rowB-2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-1][0].children[rowB-1].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-2][0].children[rowB-2].children[0].value)){
    works = 0;
  }
  else if(randNumber == (a[rowA-2][0].children[rowB-1].children[0].value)){
    works = 0;
  }
}

if((randCell.value == "") &&(works ==1)){ // if empty and not existing in the row
  randCell.value = randNumber; // Fill with random value
  i++;
  }
}

$("input").keydown(function(event){
	if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57){
    event.preventDefault();
  }
});