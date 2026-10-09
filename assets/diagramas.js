/*
  FONTE ÚNICA DOS DIAGRAMAS (Figuras 1, 2 e 3 da Etapa 1)

  Tudo o que aparece nos diagramas está neste arquivo. A partir dele o site monta
  DUAS versões automaticamente:
    - versão larga (SVG), para telas grandes;
    - versão vertical (lista de cartões), para celular e tablet.
  Mudou um texto aqui? As duas versões mudam juntas.

  Como editar:
    t  = título do bloco            s  = linhas de texto do bloco
    Em "s", um item pode ser uma lista de pedaços (ex.: ['Leite desnatado,', 'açúcar']):
    isso é UMA frase quebrada em linhas no desenho largo e junta na versão vertical.
    k  = cor: p (azul, cadeia produtiva), s (verde, suprimentos), v (vermelho, diferencial
         da Yakult), a (âmbar, apoio).
    x, y, w, h = posição e tamanho SÓ no desenho largo (a versão vertical ignora).
    "fluxo" = a ordem de leitura na versão vertical.
  O texto da legenda ("Figura 1...") continua no etapa-1.html, dentro de <figcaption>.
*/
(function () {
  'use strict';

  var FIGS = {
    /* ---------- Figura 1 · Cadeia produtiva ---------- */
    fig1: {
      titulo: 'Cadeia produtiva do leite fermentado',
      desc: 'Insumos agropecuários, produtor de leite, captação e resfriamento, laticínios, indústria de fermentados onde está a Yakult, centro de distribuição, varejo e venda direta, e consumidor final, com cadeias paralelas de açúcar, plástico, aromas e transporte refrigerado.',
      vb: [940, 360],
      nos: [
        { id: 'insumos',  k: 'p', x: 20,  y: 30,  w: 180, h: 84, t: 'Insumos agropecuários', s: ['ração, genética, sanidade'] },
        { id: 'produtor', k: 'p', x: 260, y: 30,  w: 180, h: 84, t: 'Produtor de leite', s: ['pecuária leiteira'] },
        { id: 'captacao', k: 'p', x: 500, y: 30,  w: 180, h: 84, t: 'Captação', s: ['coleta e resfriamento'] },
        { id: 'laticinios', k: 'p', x: 740, y: 30, w: 180, h: 84, t: 'Laticínios', s: ['leite e leite desnatado'] },
        { id: 'fermentados', k: 'v', x: 740, y: 170, w: 180, h: 84, t: 'Fermentados e probióticos', s: ['Yakult está aqui', '(Nestlé, Danone, Vigor…)'] },
        { id: 'cd',       k: 'p', x: 500, y: 170, w: 180, h: 84, t: 'Centro de distribuição', s: ['armazenagem e expedição'] },
        { id: 'varejo',   k: 'p', x: 260, y: 170, w: 180, h: 38, t: 'Varejo', s: ['supermercados'] },
        { id: 'venda',    k: 'v', x: 260, y: 216, w: 180, h: 38, t: 'Venda direta', s: ['porta a porta'] },
        { id: 'consumidor', k: 'p', x: 20, y: 170, w: 180, h: 84, t: 'Consumidor final', s: ['famílias, adultos, idosos'] },
        { id: 'paralelas', k: 'a', x: 20, y: 288, w: 900, h: 56, t: 'Cadeias paralelas que abastecem a indústria',
          s: ['açúcar (sucroenergético) · resina plástica (petroquímico) · aromas · embalagens · transporte refrigerado'] }
      ],
      setas: [
        'M200 72 H258', 'M440 72 H498', 'M680 72 H738', 'M830 114 V168',
        'M740 212 H682', 'M500 212 H470 V189 H442', 'M470 212 V235 H442',
        'M260 189 H202', 'M260 235 H202'
      ],
      fluxo: [
        'insumos', 'produtor', 'captacao', 'laticinios', 'fermentados', 'cd',
        ['varejo', 'venda'],
        'consumidor',
        { solto: 'paralelas' }
      ]
    },

    /* ---------- Figura 2 · Cadeia de suprimentos ---------- */
    fig2: {
      titulo: 'Cadeia de suprimentos da Yakult',
      desc: 'Fornecedores de leite desnatado, açúcar e essência, resina plástica, cepa Shirota e embalagens alimentam a fábrica de Lorena. Depois o produto vai a câmaras refrigeradas, caminhões refrigerados, um centro de distribuição e dois canais: venda domiciliar e varejo, até o consumidor final.',
      vb: [980, 440],
      nos: [
        { id: 'cab_f', k: 'h', x: 20, y: 22, t: 'Fornecedores' },
        { id: 'f1', k: 's', x: 20, y: 34,  w: 200, h: 56, t: 'Leite desnatado', s: ['origem não divulgada'] },
        { id: 'f2', k: 's', x: 20, y: 100, w: 200, h: 56, t: 'Açúcar e essência', s: ['fornecedores não divulgados'] },
        { id: 'f3', k: 's', x: 20, y: 166, w: 200, h: 56, t: 'Resina plástica', s: ['matéria-prima dos frascos'] },
        { id: 'f4', k: 'v', x: 20, y: 232, w: 200, h: 56, t: 'Cepa Shirota', s: ['probiótico exclusivo do grupo'] },
        { id: 'f5', k: 's', x: 20, y: 298, w: 200, h: 56, t: 'Embalagens', s: ['mini pacotes e caixas maiores'] },

        { id: 'cab_l', k: 'h', x: 290, y: 22, t: 'Complexo Industrial de Lorena (SP)' },
        { id: 'box_l', k: 'box', x: 290, y: 34, w: 250, h: 320 },
        { id: 'l1', k: 's', plain: true, x: 308, y: 48,  w: 214, h: 44, t: 'Esterilização do leite' },
        { id: 'l2', k: 's', plain: true, x: 308, y: 104, w: 214, h: 44, t: 'Fermentação com a cepa' },
        { id: 'l3', k: 's', plain: true, x: 308, y: 160, w: 214, h: 44, t: 'Mistura: xarope + essência' },
        { id: 'l4', k: 'v', plain: true, strong: true, x: 308, y: 216, w: 214, h: 44, t: 'Frascos feitos na fábrica' },
        { id: 'l5', k: 's', plain: true, x: 308, y: 272, w: 214, h: 44, t: 'Envase e embalagem' },
        { id: 'nota_l', k: 'nota', x: 415, y: 341, t: 'Liberação pelo Controle de Qualidade' },

        { id: 'cab_d', k: 'h', x: 590, y: 22, t: 'Frio e distribuição' },
        { id: 'd1', k: 's', x: 590, y: 40,  w: 170, h: 60, t: 'Câmaras refrigeradas', s: ['estoque até a liberação'] },
        { id: 'd2', k: 's', x: 590, y: 140, w: 170, h: 60, t: 'Caminhões refrigerados', s: ['transporte em frio'] },
        { id: 'd3', k: 's', x: 590, y: 240, w: 170, h: 70, t: 'Centro de distribuição', s: ['armazenagem e expedição'] },

        { id: 'cab_c', k: 'h', x: 800, y: 22, t: 'Canais de venda' },
        { id: 'c1', k: 'v', x: 800, y: 40,  w: 160, h: 92, t: 'Venda domiciliar', s: ['Yakult Ladies', '(comerciantes autônomas)', 'R$ 1,80–2,20 por frasco'] },
        { id: 'c2', k: 's', x: 800, y: 170, w: 160, h: 92, t: 'Varejo', s: [['supermercados e', 'minimercados'], 'R$ 2,15–2,83 por frasco'] },
        { id: 'cons', k: 'p', x: 800, y: 330, w: 160, h: 50, t: 'Consumidor final' },

        { id: 'leg1', k: 'leg', c: 'v', x: 20,  y: 402, t: 'diferencial da Yakult' },
        { id: 'leg2', k: 'leg', c: 's', x: 190, y: 402, t: 'elo comum no setor' }
      ],
      setas: [
        'M220 62 H288', 'M220 128 H288', 'M220 194 H288', 'M220 260 H288', 'M220 326 H288',
        'M540 70 H588', 'M675 100 V138', 'M675 200 V238',
        'M760 275 H780 V86 H798', 'M780 216 H798',
        'M960 86 H972 V355 H962',
        '~M960 216 H972'
      ],
      fluxo: [
        { cab: 'cab_f', ids: ['f1', 'f2', 'f3', 'f4', 'f5'] },
        { cab: 'cab_l', ids: ['l1', 'l2', 'l3', 'l4', 'l5'], seq: true, nota: 'nota_l' },
        { cab: 'cab_d', ids: ['d1', 'd2', 'd3'], seq: true },
        { cab: 'cab_c', ids: ['c1', 'c2'] },
        'cons',
        { legenda: ['leg1', 'leg2'] }
      ]
    },

    /* ---------- Figura 3 · Cadeia de valor (Porter) ---------- */
    fig3: {
      titulo: 'Cadeia de valor da Yakult segundo Porter',
      desc: 'Quatro atividades de apoio sobre cinco atividades primárias, culminando em margem.',
      vb: [980, 420],
      nos: [
        { id: 'cap_a', k: 'cap', x: 20, y: 18, t: 'ATIVIDADES DE APOIO' },
        { id: 'a1', k: 'linha', c: 'a', x: 20, y: 28,  w: 800, h: 38, l: 'Infraestrutura', t: 'gestão da qualidade; complexo industrial de Lorena, modernizado em 2013 e 2022' },
        { id: 'a2', k: 'linha', c: 'a', x: 20, y: 72,  w: 800, h: 38, l: 'Pessoas', t: 'apoio e fortalecimento da rede de Yakult Ladies (comerciantes autônomas)' },
        { id: 'a3', k: 'linha', c: 'a', x: 20, y: 116, w: 800, h: 38, l: 'P&D e tecnologia', t: 'Instituto Central Yakult (Tóquio); cepa Shirota; domínio da fermentação' },
        { id: 'a4', k: 'linha', c: 'a', x: 20, y: 160, w: 800, h: 38, l: 'Aquisição', t: 'leite desnatado, açúcar, essência e resina dos frascos (fornecedores não divulgados)' },

        { id: 'cap_p', k: 'cap', x: 20, y: 218, t: 'ATIVIDADES PRIMÁRIAS' },
        { id: 'p1', k: 's', top: true, x: 20,  y: 226, w: 156, h: 174, t: 'Logística de entrada', s: [['Leite desnatado,', 'açúcar, essência e', 'resina dos frascos;', 'cepa proprietária']] },
        { id: 'p2', k: 's', top: true, x: 184, y: 226, w: 156, h: 174, t: 'Operações', s: [['Esterilização,', 'fermentação, mistura,', 'frascos próprios e', 'envase em Lorena']] },
        { id: 'p3', k: 's', top: true, x: 348, y: 226, w: 156, h: 174, t: 'Logística de saída', s: [['Câmaras frias,', 'caminhões e centros', 'de distribuição até', 'os pontos de venda']] },
        { id: 'p4', k: 'v', top: true, x: 512, y: 226, w: 156, h: 174, t: 'Marketing e vendas', s: ['Porta a porta + varejo', 'Campanhas por versão', ['Frasco vermelho:', 'versão tradicional']] },
        { id: 'p5', k: 'v', top: true, x: 676, y: 226, w: 144, h: 174, t: 'Serviço', s: [['Entrega recorrente', 'em casa; a Yakult', 'Lady explica o', 'benefício do probiótico']] },

        { id: 'margem', k: 'margem', d: 'M830 28 H922 L962 214 L922 400 H830 Z', x: 892, y: 206, t: 'MARGEM', s: [['valor percebido', 'pelo cliente']] }
      ],
      setas: [],
      fluxo: [
        { cab: 'cap_a', ids: ['a1', 'a2', 'a3', 'a4'] },
        { solto: { cab: 'cap_p', ids: ['p1', 'p2', 'p3', 'p4', 'p5'], seq: true } },
        'margem'
      ]
    }
  };

  /* ---------------------------------------------------------------- utilitários */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function byId(fig) {
    var m = {};
    fig.nos.forEach(function (n) { m[n.id] = n; });
    return m;
  }
  /* "s" pode ter itens simples ou listas de pedaços de uma mesma frase */
  function linhasLargas(n) {
    var out = [];
    (n.s || []).forEach(function (it) { if (Array.isArray(it)) { out = out.concat(it); } else { out.push(it); } });
    return out;
  }
  function frases(n) {
    return (n.s || []).map(function (it) { return Array.isArray(it) ? it.join(' ') : it; });
  }
  function classeCor(k) { return { p: 'svg-p', s: 'svg-s', v: 'svg-v', a: 'svg-a' }[k] || 'svg-box'; }

  /* ---------------------------------------------------------------- versão larga (SVG) */
  function textoCentrado(n) {
    var cx = n.x + n.w / 2;
    var linhas = linhasLargas(n);
    var out = '';
    if (n.plain) {
      out += '<text class="svg-t' + (n.strong ? ' b' : '') + '" x="' + cx + '" y="' + (n.y + n.h / 2 + 5) + '" text-anchor="middle">' + esc(n.t) + '</text>';
      return out;
    }
    var by;
    if (n.top) {
      by = n.y + 24;
      out += '<text class="svg-t b" x="' + cx + '" y="' + by + '" text-anchor="middle">' + esc(n.t) + '</text>';
      linhas.forEach(function (ln, i) {
        out += '<text class="svg-t sm" x="' + cx + '" y="' + (n.y + 50 + i * 16) + '" text-anchor="middle">' + esc(ln) + '</text>';
      });
      return out;
    }
    var v = linhas.length ? 28 + 16 * (linhas.length - 1) : 10;
    by = Math.round(n.y + n.h / 2 + 10 - v / 2);
    out += '<text class="svg-t b" x="' + cx + '" y="' + by + '" text-anchor="middle">' + esc(n.t) + '</text>';
    linhas.forEach(function (ln, i) {
      out += '<text class="svg-t sm" x="' + cx + '" y="' + (by + 18 + i * 16) + '" text-anchor="middle">' + esc(ln) + '</text>';
    });
    return out;
  }

  function desenharSvg(key, fig) {
    var mk = 'ah-' + key, idT = 't-' + key, idD = 'd-' + key;
    var s = '<svg viewBox="0 0 ' + fig.vb[0] + ' ' + fig.vb[1] + '" role="img" aria-labelledby="' + idT + ' ' + idD + '" xmlns="http://www.w3.org/2000/svg">';
    s += '<title id="' + idT + '">' + esc(fig.titulo) + '</title><desc id="' + idD + '">' + esc(fig.desc) + '</desc>';
    s += '<defs><marker id="' + mk + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="svg-arrow"/></marker></defs>';
    fig.nos.forEach(function (n) {
      switch (n.k) {
        case 'h':
          s += '<text class="svg-t h" x="' + n.x + '" y="' + n.y + '">' + esc(n.t) + '</text>'; break;
        case 'cap':
          s += '<text class="svg-t sm" x="' + n.x + '" y="' + n.y + '">' + esc(n.t) + '</text>'; break;
        case 'nota':
          s += '<text class="svg-t sm" x="' + n.x + '" y="' + n.y + '" text-anchor="middle">' + esc(n.t) + '</text>'; break;
        case 'box':
          s += '<rect class="svg-box" x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="12"/>'; break;
        case 'leg':
          s += '<rect class="' + classeCor(n.c) + '" x="' + n.x + '" y="' + n.y + '" width="14" height="14" rx="3"/>' +
               '<text class="svg-t sm" x="' + (n.x + 22) + '" y="' + (n.y + 12) + '">' + esc(n.t) + '</text>'; break;
        case 'linha':
          s += '<rect class="svg-a" x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="8"/>' +
               '<text class="svg-t" x="' + (n.x + 14) + '" y="' + (n.y + 24) + '"><tspan font-weight="700">' + esc(n.l) + '</tspan>' +
               esc('  ·  ' + n.t) + '</text>'; break;
        case 'margem':
          s += '<path class="svg-v" d="' + n.d + '"/>' +
               '<text class="svg-t h" x="' + n.x + '" y="' + n.y + '" text-anchor="middle">' + esc(n.t) + '</text>';
          linhasLargas(n).forEach(function (ln, i) {
            s += '<text class="svg-t sm" x="' + n.x + '" y="' + (n.y + 20 + i * 16) + '" text-anchor="middle">' + esc(ln) + '</text>';
          });
          break;
        default: {
          var rx = n.h <= 44 ? 8 : (n.h < 50 ? 9 : 10);
          s += '<rect class="' + classeCor(n.k) + '" x="' + n.x + '" y="' + n.y + '" width="' + n.w + '" height="' + n.h + '" rx="' + rx + '"/>' + textoCentrado(n);
        }
      }
    });
    fig.setas.forEach(function (d) {
      var sem = d.charAt(0) === '~';
      if (sem) d = d.slice(1);
      s += '<path class="svg-line" d="' + d + '"' + (sem ? '' : ' marker-end="url(#' + mk + ')"') + '/>';
    });
    return s + '</svg>';
  }

  /* ---------------------------------------------------------------- versão vertical (lista) */
  function cartao(n) {
    var c = n.k === 'linha' || n.k === 'leg' ? n.c : n.k;
    var h;
    if (n.k === 'linha') {
      h = '<li class="fl-card f-' + c + '"><strong>' + esc(n.l) + '</strong> <span>' + esc(n.t) + '</span></li>';
    } else if (n.k === 'margem') {
      h = '<li class="fl-card f-v fl-margem"><strong>' + esc(n.t) + '</strong>' + frases(n).map(function (f) { return '<span>' + esc(f) + '</span>'; }).join('') + '</li>';
    } else {
      h = '<li class="fl-card f-' + c + '"><strong>' + esc(n.t) + '</strong>' + frases(n).map(function (f) { return '<span>' + esc(f) + '</span>'; }).join('') + '</li>';
    }
    return h;
  }
  var SETA = '<li class="fl-arrow" aria-hidden="true"></li>';

  function lista(ids, m, seq) {
    var partes = ids.map(function (id) { return cartao(m[id]); });
    return '<ol class="fl-list">' + partes.join(seq ? SETA : '') + '</ol>';
  }

  function bloco(b, m) {
    if (typeof b === 'string') { return lista([b], m, false); }
    if (Array.isArray(b)) { return '<div class="fl-lado">' + lista(b, m, false).replace(/<ol class="fl-list">/, '<ol class="fl-list fl-row">') + '</div>'; }
    if (b.legenda) {
      return '<ul class="fl-leg">' + b.legenda.map(function (id) {
        return '<li><i class="f-' + m[id].c + '"></i>' + esc(m[id].t) + '</li>';
      }).join('') + '</ul>';
    }
    if (b.solto) { return typeof b.solto === 'string' ? lista([b.solto], m, false) : bloco(b.solto, m); }
    if (b.cab) {
      var h = '<div class="fl-grupo"><p class="fl-cab">' + esc(m[b.cab].t) + '</p>' + lista(b.ids, m, !!b.seq);
      if (b.nota) h += '<p class="fl-nota">' + esc(m[b.nota].t) + '</p>';
      return h + '</div>';
    }
    return '';
  }

  function desenharLista(fig) {
    var m = byId(fig), out = '';
    fig.fluxo.forEach(function (b, i) {
      var solto = b && typeof b === 'object' && !Array.isArray(b) && b.solto;
      if (i > 0 && !solto && !(b && b.legenda)) out += '<div class="fl-arrow fl-arrow-big" aria-hidden="true"></div>';
      out += bloco(b, m);
    });
    return '<div class="fl" role="group" aria-label="' + esc(fig.titulo) + ' (versão em lista)">' + out + '</div>';
  }

  /* ---------------------------------------------------------------- montagem */
  function montar() {
    var figs = document.querySelectorAll('figure.diagram[data-fig]');
    Array.prototype.forEach.call(figs, function (el) {
      var key = el.getAttribute('data-fig');
      var fig = FIGS[key];
      if (!fig) return;
      var wide = el.querySelector('.dg-wide');
      var narrow = el.querySelector('.dg-narrow');
      if (wide) wide.innerHTML = desenharSvg(key, fig);
      if (narrow) narrow.innerHTML = desenharLista(fig);
      el.classList.add('dg-ready');
    });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', montar); } else { montar(); }
  window.YAKULT_DIAGRAMAS = FIGS; /* útil para conferir/testar */
})();
