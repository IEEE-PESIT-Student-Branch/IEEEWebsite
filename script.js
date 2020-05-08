window.addEventListener("scroll", function() {
  var header = document.querySelector("nav");
  var height = window.innerHeight;
  var width = window.innerWidth;
  header.classList.toggle(
    "sticky",
    window.scrollY > 0.7 * height && width > 858
  );
});

var slideIndex = 1;
handleSlider(slideIndex);

function plusDivs(n) {
  handleSlider((slideIndex += n));
}

function arrowClicked(n) {
  clearInterval(slider);
  slider = setInterval(function() {
    plusDivs(+1);
  }, 2000);
  plusDivs(n);
}

function handleSlider(n) {
  var i;
  var x = 3; //No of Posters
  if (n > x) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x;
  }
  var offset = -1 * 100 * (slideIndex - 1);
  var dots = document.getElementsByClassName("pagination-dot");
  for (let d of dots) {
    d.classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");
  document.getElementsByClassName("slidercontainer")[0].style.left =
    offset + "%";
}

var slider = setInterval(function() {
  plusDivs(+1);
}, 2000);
