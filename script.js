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
});

// Typing Animation
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".typing")) {
    const typed = new Typed(".typing", {
      strings: ["Designer", "Developer", "Freelancer", "UI/UX Designer", "Web Developer"],
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

  // Initialize skill bars after slight delay
  setTimeout(() => {
    animateSkills();
  }, 1000);
});

// Active Navigation Links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

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

  // Skill animation on scroll
  animateSkills();
});

// Skill Progress Animation
const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

// Store original width and hide initially
progressBars.forEach((bar) => {
  bar.dataset.width = bar.style.width;
  bar.style.width = "0";
});

function animateSkills() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.3;

  if (sectionTop < triggerPoint) {
    progressBars.forEach((bar) => {
      const targetWidth = bar.dataset.width;
      bar.style.width = targetWidth;
    });
  }
}

// Form Submission
const contactForm = document.querySelector(".contact-content form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector(".field.name input").value;
    const email = contactForm.querySelector(".field.email input").value;
    const subject = contactForm.querySelector('.field input[placeholder="Subject"]').value;
    const message = contactForm.querySelector(".field.textarea textarea").value;

    if (name && email && subject && message) {
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Smooth scrolling for anchor links
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
