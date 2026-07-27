// Micro-interaction: Smooth Reveal on Scroll
// Each <section> starts hidden (see CSS) and fades/slides into
// place once it scrolls into view.
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});



// Form Submission Interaction
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector(".btn-submit");
  btn.textContent = "Sending...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = "Message Sent!";
    btn.classList.add("btn-submit--success");
    e.target.reset();
  }, 1500);
});