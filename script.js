window.addEventListener("scroll", function() {
  var header = document.querySelector("nav");
  var height = window.innerHeight;
  var width = window.innerWidth;
  header.classList.toggle("sticky", (window.scrollY > 0.70 * height)&& width > 858);
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function handleSlider(n) {
  var i;
  var x = 3 //No of Posters
  if (n > x) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  var offset = -1 * 100 * (slideIndex-1);

}