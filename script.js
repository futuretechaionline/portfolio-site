// Subtle scroll-reveal for sections and project cards. No dependencies.
(function () {
  var targets = document.querySelectorAll('.project-card, .skill-cat, .cert-row, .about-panel');
  targets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(function (el) { observer.observe(el); });
})();
