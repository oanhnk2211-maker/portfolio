document.documentElement.classList.add("js");

const cards = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reducedMotion || !("IntersectionObserver" in window)) {
  cards.forEach((card) => card.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  cards.forEach((card) => observer.observe(card));
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
