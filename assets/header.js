/* Cabeçalho das etapas: abas com destaque da seção atual, barra de progresso e linha da marca recolhível no celular */
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.tabs a'));
  if (!links.length) return;
  var row = document.querySelector('.tabs-row');
  var bar = document.getElementById('progress-bar');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var topbar = document.querySelector('.topbar');
  var brandRow = topbar.querySelector('.wrap');
  var small = window.matchMedia ? window.matchMedia('(max-width: 600px)') : { matches: false };
  var ids = links.map(function (a) { return a.getAttribute('href').slice(1); });
  var sections = ids.map(function (id) { return document.getElementById(id); });

  function setActive(id) {
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      if (on) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
      if (on && row && row.scrollWidth > row.clientWidth) {
        var target = a.offsetLeft - (row.clientWidth - a.offsetWidth) / 2;
        row.scrollTo({ left: target, behavior: reduce ? 'auto' : 'smooth' });
      }
    });
  }

  function update() {
    var hh = topbar.getBoundingClientRect().bottom;
    var y = window.scrollY + hh + 24;
    var current = null;
    for (var k = 0; k < sections.length; k++) {
      if (sections[k] && sections[k].offsetTop <= y) current = ids[k];
    }
    var atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atEnd) current = ids[ids.length - 1];
    if (current) { setActive(current); } else { links.forEach(function (a) { a.removeAttribute('aria-current'); }); }
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar && max > 0) bar.style.width = Math.min(100, Math.max(0, (window.scrollY / max) * 100)) + '%';
  }

  /* Celular: a linha da marca desliza para cima ao rolar para baixo e volta ao rolar para cima.
     O JS só troca uma classe (sem ler layout no scroll); quem anima é o CSS, com transform. */
  var brandH = 0, lastY = window.scrollY, lock = 0;
  links.forEach(function (a) { a.addEventListener('click', function () { lock = Date.now() + 1200; }); });
  function direcao() {
    if (!small.matches) { topbar.classList.remove('hide-brand'); lastY = window.scrollY; return; }
    var y = window.scrollY, d = y - lastY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (y < 0 || y > max) return; /* efeito elástico (iPhone) no topo e no fim da página */
    if (Math.abs(d) < 6) return;
    lastY = y;
    if (Date.now() < lock) return;
    if (d < 0 || y <= brandH) { topbar.classList.remove('hide-brand'); } else { topbar.classList.add('hide-brand'); }
  }
  /* Ao abrir ou recarregar (F5), o cabeçalho completo aparece, mesmo se o navegador restaurar a rolagem no meio da página */
  function estadoInicial() {
    lastY = window.scrollY;
    lock = Date.now() + 800;
    topbar.classList.remove('hide-brand');
  }
  estadoInicial();
  window.addEventListener('pageshow', function () { estadoInicial(); update(); });

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(function () { direcao(); update(); ticking = false; }); }
  }, { passive: true });
  /* Medidas do cabeçalho (só ao carregar e ao redimensionar, nunca durante a rolagem) */
  function medirCabecalho() {
    brandH = small.matches ? brandRow.offsetHeight : 0;
    var r = document.documentElement.style;
    r.setProperty('--brand-h', brandH + 'px');
    r.setProperty('--stick', (topbar.offsetHeight - brandH) + 'px');
  }
  window.addEventListener('resize', function () { medirCabecalho(); direcao(); update(); });
  medirCabecalho();
  update();
})();
