// Header drawer (hamburger menu) – tablet/mobile
(function headerDrawer() {
  var hamburger = document.querySelector(".header-hamburger");
  var drawer = document.querySelector(".header-drawer");
  if (!hamburger || !drawer) return;
  function open() {
    document.body.classList.add("header-drawer-open");
    hamburger.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
  }
  function close() {
    document.body.classList.remove("header-drawer-open");
    hamburger.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
  }
  hamburger.addEventListener("click", function () {
    if (hamburger.getAttribute("aria-expanded") === "true") close();
    else open();
  });
  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", close);
  });
  drawer.addEventListener("click", function (e) {
    if (e.target === drawer) close();
  });
})();

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


// Footer accordion – tablet/mobile
(function footerAccordion() {
  var trigger = document.querySelector(".footer-accordion-trigger");
  var block = document.querySelector(".footer-right");
  if (!trigger || !block) return;

  trigger.addEventListener("click", function () {
    var open = block.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

