window.onload = function () {
  const carousel = document.querySelector(".carousel");
  const track = document.querySelector(".track");
  const images = document.querySelectorAll(".track img");

  let index = 0;

  const imageWidth = images[0].offsetWidth + 10;
  const carouselWidth = carousel.offsetWidth;
  const extraPeek = 120; // adjust this value
  const centerOffset = (carouselWidth - imageWidth) / 2 + extraPeek;

  setInterval(() => {
    index++;

    if (index >= images.length) {
      index = 0;
    }

    track.style.transform =
      `translateX(${-(index * imageWidth) + centerOffset}px)`;
  }, 3000);
};
