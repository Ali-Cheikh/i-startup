(function () {
  "use strict";

  var menuButton = document.querySelector(".menu-toggle");
  var nav = document.querySelector("#site-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      var menuIcon = menuButton.querySelector("i");
      menuIcon.classList.toggle("fa-bars", !isOpen);
      menuIcon.classList.toggle("fa-xmark", isOpen);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
        var menuIcon = menuButton.querySelector("i");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark");
      });
    });
  }

  var readingProgress = document.createElement("div");
  readingProgress.className = "reading-progress";
  readingProgress.setAttribute("aria-hidden", "true");
  document.body.prepend(readingProgress);

  function updateReadingProgress() {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    readingProgress.style.width = Math.min(100, Math.max(0, progress)) + "%";
  }

  updateReadingProgress();
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress, { passive: true });

  var interactiveCards = document.querySelectorAll(".promise-card, .service-card, .project-card, .detail-card, .automation-case, .contact-method");
  interactiveCards.forEach(function (card) {
    card.addEventListener("pointerenter", function () {
      card.classList.add("is-hovered");
    });
    card.addEventListener("pointerleave", function () {
      card.classList.remove("is-hovered");
    });
  });

  var contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    var serviceSelect = contactForm.querySelector("[name='service']");
    var requestedService = new URLSearchParams(window.location.search).get("service");
    if (serviceSelect && requestedService) {
      var serviceOptions = {
        development: "Full-stack web development",
        automation: "Business automation",
        systems: "Internal system or dashboard",
        domains: "Domain, hosting, or deployment management"
      };
      serviceSelect.value = serviceOptions[requestedService] || "";
    }

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(contactForm);
      var subject = "Project enquiry from " + data.get("name");
      var body = [
        "Name: " + data.get("name"),
        "Email: " + data.get("email"),
        "Project type: " + (data.get("service") || "Not specified"),
        "",
        data.get("message")
      ].join("\n");
      window.location.href = "mailto:contact@i-startup.tn?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  var canvas = document.querySelector("#hero-net");
  var context = canvas && canvas.getContext("2d");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canvas || !context || reduceMotion) return;

  var points = [];
  var width = 0;
  var height = 0;
  var frame = 0;
  var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

  function resizeCanvas() {
    var bounds = canvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    var count = Math.max(24, Math.min(62, Math.round((width * height) / 19000)));
    points = Array.from({ length: count }, function () {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22
      };
    });
  }

  function drawNetwork() {
    context.clearRect(0, 0, width, height);

    points.forEach(function (point, index) {
      point.x += point.vx;
      point.y += point.vy;
      if (point.x < 0 || point.x > width) point.vx *= -1;
      if (point.y < 0 || point.y > height) point.vy *= -1;

      for (var next = index + 1; next < points.length; next += 1) {
        var other = points[next];
        var dx = point.x - other.x;
        var dy = point.y - other.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 145) {
          context.strokeStyle = "rgba(139, 185, 168, " + (0.14 * (1 - distance / 145)) + ")";
          context.lineWidth = 0.7;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }

      context.fillStyle = "rgba(173, 207, 191, .48)";
      context.beginPath();
      context.arc(point.x, point.y, 1.2, 0, Math.PI * 2);
      context.fill();
    });

    frame = window.requestAnimationFrame(drawNetwork);
  }

  resizeCanvas();
  drawNetwork();
  window.addEventListener("resize", resizeCanvas, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      window.cancelAnimationFrame(frame);
    } else {
      drawNetwork();
    }
  });
})();
