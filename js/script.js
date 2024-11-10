document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  const images = document.querySelectorAll("#wowslider-container1 .ws_images li");
  const bullets = document.querySelectorAll(".ws_bullets a");

  const updateSlider = () => {
    images.forEach((img, i) => img.style.display = i === currentIndex ? "block" : "none");
    bullets.forEach((bullet, i) => bullet.classList.toggle("active", i === currentIndex));
  };

  bullets.forEach((bullet, i) => bullet.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  }));

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 3000);

  updateSlider();
});
