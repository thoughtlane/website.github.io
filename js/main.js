(function () {
  const header = document.querySelector(".site-header");
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const year = document.getElementById("year");
  const capRail = document.getElementById("capRail");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute(
        "aria-label",
        nav.classList.contains("open") ? "Close menu" : "Open menu"
      );
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Wheel → horizontal scroll when hovering the capabilities rail
  if (capRail) {
    capRail.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
        if (capRail.scrollWidth <= capRail.clientWidth) return;
        event.preventDefault();
        capRail.scrollLeft += event.deltaY;
      },
      { passive: false }
    );
  }

  // Reveal on scroll
  const revealables = document.querySelectorAll(
    ".inst-card, .product-card, .looking-card, .secure-card, .cap-card"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealables.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      el.style.transition = `opacity 0.55s ease ${Math.min(index % 4, 3) * 0.08}s, transform 0.55s ease ${Math.min(index % 4, 3) * 0.08}s`;
      observer.observe(el);
    });
  }
})();
