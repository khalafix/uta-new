(() => {
  const container = document.querySelector(".section-01 .right-images");
  if (!container) return;

  const reveal = () => container.classList.add("is-visible");

  if (!("IntersectionObserver" in window)) {
    reveal();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal();
        io.disconnect();
      });
    },
    { root: null, threshold: 0.15 }
  );

  io.observe(container);
})();

