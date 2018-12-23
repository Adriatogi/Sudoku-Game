var a = [$(".a1"), $(".a2"), $(".a3"),$(".a4"),$(".a5"),$(".a6"),$(".a7"),$(".a8"),$(".a9")];
var b = [$(".b1"), $(".b2"), $(".b3"), $(".b4"), $(".b5"), $(".b6"), $(".b7"), $(".b8"), $(".b9")];
var i = 0;

while(i < 35){
  rowA = a[Math.floor(Math.random() * a.length)];
  rowB = Math.floor(Math.random() * b.length);
  var aChild = rowA[0].children[rowB].children[0];
  randNumber = (Math.floor(Math.random() * 9) + 1);
  if(aChild.value == ""){
    aChild.value = randNumber;
    i++;
  }
}

$("input").keydown(function(event){
	if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57){
    event.preventDefault();
  }
});