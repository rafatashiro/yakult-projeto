/* Parallax leve do fundo de leite: só transform, só enquanto o fundo está visível. */
(function () {
  var root = document.querySelector('.milk-bg');
  if (!root) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var layers = Array.prototype.slice.call(root.querySelectorAll('[data-speed]'));
  var limit = root.offsetHeight;
  var ticking = false;

  function frame() {
    ticking = false;
    var y = Math.min(window.scrollY, limit);
    for (var i = 0; i < layers.length; i++) {
      var g = layers[i];
      var speed = parseFloat(g.getAttribute('data-speed')) || 0;
      var sway = parseFloat(g.getAttribute('data-sway')) || 0;
      var phase = parseFloat(g.getAttribute('data-phase')) || 0;
      var x = sway ? Math.sin(y / 170 + phase) * sway : 0;
      g.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + (y * speed).toFixed(1) + 'px,0)';
    }
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > limit + 40 && !ticking) return;
    if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
  }, { passive: true });
  window.addEventListener('resize', function () { limit = root.offsetHeight; frame(); });
  frame();
})();
