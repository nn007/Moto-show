var index = 1;

function plus(n) {
  index = index + n;
  showImage();
}
function showImage(n) {
  var x = document.getElementsByClassName("slides");
  if(index > x.length){
    index = 1;
  }
  if(1 > index){
    index = x.length;
  }
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[index-1].style.display = "block";

  // Auto slide is stopped
  // autoSlide();
  function autoSlide() {
    var x = document.getElementsByClassName("slides");
    if(index > x.length){
      index = 1;
    }
    if(1 > n){
      index = x.length;
    }
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[index-1].style.display = "block";
    index++;
    setTimeout(autoSlide,2000);
  }
}
showImage();
