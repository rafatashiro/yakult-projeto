# Yakult, da fazenda ao frasco

Site do projeto final da disciplina **Tópicos em Engenharia de Produção na Indústria de Alimentos** (UFABC, Engenharia de Gestão), sobre o **Leite Fermentado Yakult tradicional (80 ml, pacote com 6)**.

**Professora:** Carolina Corrêa de Carvalho

**Grupo:** Caroline Araujo, Giovanna Gama, Glauber Carmo e Rafael Tashiro

**Site no ar:** https://yakult-projeto.vercel.app

O projeto é entregue em etapas. Cada etapa vira uma página nova do site.

| Etapa | Conteúdo | Status |
| --- | --- | --- |
| 1 | Cadeia produtiva, cadeia de suprimentos e cadeia de valor, com 3 diagramas, comparativo, insights para o engenheiro de gestão, limitações do estudo e fontes | Entregue |
| 2 | A definir | Em breve |

## Estrutura

```
index.html            página inicial (apresentação e lista de etapas)
etapa-1.html          conteúdo completo da Etapa 1
assets/
  style.css           estilos de todo o site
  diagramas.js        fonte única dos diagramas (veja abaixo)
  milk.js             movimento (parallax) do fundo de leite ao rolar
  fonts/              fonte Inter hospedada junto com o site (licença OFL)
  yakult-frasco.webp  imagem do frasco usada no título e no cabeçalho
  favicon.png, apple-touch-icon.png
```

Site estático: HTML, CSS e JavaScript puros, **sem build e sem dependências**. Para ver localmente, abra `index.html` no navegador. Para testar de forma mais fiel (fontes e scripts), rode `python3 -m http.server` na pasta e abra `http://localhost:8000`.

## Como editar

**Textos da Etapa 1:** direto em `etapa-1.html`.

**Diagramas (Figuras 1, 2 e 3):** edite apenas `assets/diagramas.js`. Dele saem duas versões automaticamente: o desenho largo (SVG, telas a partir de 900 px) e uma lista vertical para celular e tablet. Mudou um texto lá, as duas versões mudam juntas. O arquivo tem um comentário no topo explicando os campos. Posição e tamanho das caixas valem só para o desenho largo. A legenda de cada figura fica no `<figcaption>` do `etapa-1.html`.

**Cores:** variáveis no início de `assets/style.css`. A paleta é única, tom de leite fermentado, e não muda com o modo escuro do aparelho.

**Nova etapa:** crie `etapa-2.html` com o mesmo cabeçalho, adicione um cartão em `index.html` e atualize a tabela acima. Evite alterar a Etapa 1 depois da entrega.

## Publicação (Vercel)

O repositório está conectado à Vercel. A cada push na branch `main`, o site é publicado de novo no mesmo endereço. Para criar um projeto novo a partir deste repositório: em vercel.com, **Add New → Project**, importe o repositório e clique em **Deploy** (sem alterar configurações).

## Medição de acessos

O site usa o **Vercel Web Analytics** (script `/_vercel/insights/script.js` no `<head>` das páginas). Ele conta visitantes e páginas abertas sem cookies e sem identificar pessoas. Os números ficam no painel da Vercel, em **Analytics**. Só funciona no site publicado, não ao abrir o arquivo no computador.

## Fontes e limitações

As fontes de cada dado estão na seção **Fontes** da Etapa 1, e o que não foi possível afirmar com dados públicos está em **Limitações do estudo**. Os preços do produto tradicional são faixas observadas pelo grupo, não dados institucionais da empresa.

## Créditos

Fonte Inter, do The Inter Project Authors, sob licença SIL Open Font License (`assets/fonts/LICENSE-Inter.txt`). Yakult é marca de seus respectivos titulares. Trabalho acadêmico.
