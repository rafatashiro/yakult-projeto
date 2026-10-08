/* Parallax do fundo de leite: cada camada oscila em ritmos diferentes ao longo de TODA a rolagem.
   Só usa transform (camadas na GPU), roda em requestAnimationFrame e respeita "reduzir movimento". */
(function () {
  var root = document.querySelector('.milk-bg');
  if (!root) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var layers = Array.prototype.slice.call(root.querySelectorAll('.milk-layer')).map(function (el) {
    return {
      el: el,
      ay: parseFloat(el.getAttribute('data-ay')) || 0,
      ax: parseFloat(el.getAttribute('data-ax')) || 0,
      per: parseFloat(el.getAttribute('data-per')) || 400,
      ph: parseFloat(el.getAttribute('data-ph')) || 0
    };
  });
  var ticking = false;

  function frame() {
    ticking = false;
    var s = window.scrollY;
    for (var i = 0; i < layers.length; i++) {
      var L = layers[i];
      // subtrai o valor em s=0 para a composição do topo ficar exatamente como desenhada
      var ty = (Math.sin(s / L.per + L.ph) - Math.sin(L.ph)) * L.ay;
      var tx = (Math.cos(s / (L.per * 1.35) + L.ph) - Math.cos(L.ph)) * L.ax;
      L.el.style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0)';
    }
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
  }, { passive: true });
  frame();
})();
