(() => {
  const header = document.querySelector("header");
  if (!header) return;

  const threshold = 40; // بعد از ۴۰px اسکرول، پس‌زمینه تیره می‌شود

  const onScroll = () => {
    if (window.scrollY > threshold) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // برای حالت رفرش وسط صفحه
})();


// FAQ image slide-in / slide-out from right
(() => {
  const img = document.querySelector(".faq-image-slide");
  if (!img) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.classList.add("is-visible");
        } else {
          img.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  io.observe(img);
})();


// Section-3 left/right columns slide-in on scroll
(() => {
  const container = document.querySelector(".section-3 .container");
  if (!container) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          container.classList.add("is-visible");
        } else {
          container.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.25 }
  );

  io.observe(container);
})();

