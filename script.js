document.querySelector(".cta-button").addEventListener("click", function () {
  alert("Thanks for signing up!");
});
const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("navbar--open");
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);

    const navbarHeight = navbar.offsetHeight;
    const sectionPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    // Close navbar if open
    navbar.classList.remove("navbar--open");
  });
});

// Testimonials slider
const testimonials = document.querySelector(".testimonials");
const testimonialItems = document.querySelectorAll(".testimonial-item");
const testimonialNext = document.querySelector(".testimonial-next");
const testimonialPrev = document.querySelector(".testimonial-prev");

let currentTestimonial = 0;

testimonialNext.addEventListener("click", () => {
  currentTestimonial++;
  if (currentTestimonial > testimonialItems.length - 1) {
    currentTestimonial = 0;
  }
  updateTestimonials();
});

testimonialPrev.addEventListener("click", () => {
  currentTestimonial--;
  if (currentTestimonial < 0) {
    currentTestimonial = testimonialItems.length - 1;
  }
  updateTestimonials();
});

function updateTestimonials() {
  testimonialItems.forEach((item) => {
    item.classList.remove("testimonial-item--active");
  });

  testimonialItems[currentTestimonial].classList.add(
    "testimonial-item--active"
  );
}
