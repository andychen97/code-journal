var imageURL = document.getElementById('img-URL');
var image = document.querySelector('.placeholder-img');

imageURL.addEventListener('input', function (event) {
  image.setAttribute('src', event.target.value);
});
