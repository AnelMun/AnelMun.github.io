
function openLightbox() {
  document.getElementById("myLightbox").style.display = "block";
}

// Close the Modal
function closeLightbox() {
  document.getElementById("myLightbox").style.display = "none";
}

var slideIndex = 1;
showPhotos(slideIndex);

// Next/previous controls
function nextPhoto(n) {
  showPhotos(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showPhotos(slideIndex = n);
}

function showPhotos(n) {
  var i;
  var slides = document.getElementsByClassName("myPhotos");
  var dots = document.getElementsByClassName("demo");
  var descriptionText = document.getElementById("description");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  descriptionText.innerHTML = dots[slideIndex-1].alt;
}