// Toggle Menu
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
});

// Close menu when clicking on a nav link
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  });
});

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Active Navigation Links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 300) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Typing Animation + ScrollReveal + Particle Animation
document.addEventListener("DOMContentLoaded", () => {
  // Typing Animation
  if (document.querySelector(".typing")) {
    new Typed(".typing", {
      strings: ["Web Developer", "Freelancer", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  // Scroll Reveal Animation
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
      reset: true,
    });

    sr.reveal(".heading", { origin: "top" });
    sr.reveal(".about-content .image, .skills-content, .projects-container, .contact-content", {
      origin: "bottom",
      interval: 200,
    });
    sr.reveal(".about-content .text", { origin: "right" });
    sr.reveal(".skills-content .column:first-child", { origin: "left" });
    sr.reveal(".skills-content .column:last-child", { origin: "right" });
    sr.reveal(".project-box", { origin: "bottom", interval: 200 });
  }

  // Animate background particles
  const particles = document.querySelectorAll(".particle");
  particles.forEach((particle) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    particle.style.top = `${randomY}%`;
    particle.style.left = `${randomX}%`;
  });
});


// Form Submission (fixed for Formspree)
const contactForm = document.querySelector(".contact-content form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const name = contactForm.querySelector('input[name="name"]').value
    const email = contactForm.querySelector('input[name="email"]').value
    const subject = contactForm.querySelector('input[name="subject"]').value
    const message = contactForm.querySelector('textarea[name="message"]').value

    // Client-side validation only
    if (!name || !email || !subject || !message) {
      e.preventDefault()
      alert("Please fill in all fields.")
      return
    }

    // If validation passes, show loading state but let form submit naturally
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    // Don't prevent default - let the form submit to Formspree
  })
}


// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
