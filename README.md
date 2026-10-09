# yakult-projeto

Site do projeto final de **Tópicos em Engenharia de Produção na Indústria de Alimentos** (UFABC), sobre o Leite Fermentado Yakult.

## Estrutura

- `index.html`: página inicial com a lista de etapas
- `etapa-1.html`: cadeia produtiva, de suprimentos e de valor, insights e fontes
- `assets/style.css`: estilos de todo o site
- `assets/milk.js`: movimento (parallax) do fundo de leite ao rolar a página
- `assets/diagramas.js`: **fonte única** das 3 figuras da Etapa 1. Edite os textos aqui e as duas versões (larga em SVG e vertical para celular) mudam juntas
- `assets/fonts/`: fonte Inter (licença OFL) hospedada junto com o site

Site estático, sem build. Para ver localmente, abra `index.html` no navegador.

## Publicação (Vercel)

1. Em vercel.com, entre com a conta do GitHub e clique em **Add New → Project**.
2. Importe este repositório e clique em **Deploy** (sem alterar configurações).
3. A cada push na branch `main`, o site é atualizado no mesmo link.

## Próximas etapas

Cada etapa vira uma página nova (`etapa-2.html` etc.) e um cartão em `index.html`. Não altere a Etapa 1 depois da entrega.
