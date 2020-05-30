window.addEventListener("scroll", function() {
  var header = document.querySelector("nav");
  var height = window.innerHeight;
  var width = window.innerWidth;
  if(window.scrollY < 0.2 * height){
      header.style.background = "none";
  }
  else {
      header.style.background = "rgb(41, 39, 42)";
  }
});
