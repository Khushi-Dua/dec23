document.addEventListener("DOMContentLoaded", () => {
  const introPage = document.querySelector(".intro-page");
  const carousel = document.querySelector(".carousel");
  const birthdaySong = document.getElementById("birthdaySong");
  const items = document.querySelectorAll(".carousel-item");

  let progress = 0;
  let activeIndex = 0;
  let autoSlideInterval;

  // Introductory page transition
  setTimeout(() => {
    introPage.classList.add("hidden");
    setTimeout(() => {
      introPage.style.display = "none";
      carousel.classList.remove("hidden");

      // Start auto-sliding after transition
      startAutoSlide();
    }, 1500);
  }, 5000); // Show intro page for 5 seconds

  // Auto-slide functionality
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      progress += 100 / items.length;
      activeIndex = (activeIndex + 1) % items.length;
      updateCarousel();
    }, 3000); // 3 seconds per slide
  }

  // Update carousel
  function updateCarousel() {
    items.forEach((item, index) => {
      const zIndex = items.length - Math.abs(activeIndex - index);
      item.style.setProperty("--zIndex", zIndex);
      item.style.setProperty("--active", (index - activeIndex) / items.length);
    });
  }

  // Pause auto-slide on interaction
  carousel.addEventListener("mousedown", () => clearInterval(autoSlideInterval));
  carousel.addEventListener("mouseup", startAutoSlide);

  // Initial display of the carousel
  updateCarousel();
});
