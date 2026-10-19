# CIC SHOP — loja

Loja estática de demonstração. Catálogo, detalhes, estoque e finalização usam a API CIC SHOP; IDs e quantidades do carrinho ficam no navegador. Não há pagamento real.

## Executar localmente

Inicie a API na porta 3001. Nesta pasta, execute `npx http-server -p 8140 .` e abra `http://localhost:8140`.

## Publicar no GitHub Pages

Antes de enviar este repositório, coloque a URL HTTPS da API publicada em `assets/js/config.js`. Envie os arquivos desta pasta para a raiz da branch `main`. Em Settings → Pages, escolha Deploy from a branch, `main` e `/ (root)`.

Para experimentar outra API sem editar o arquivo, abra a loja com `?api=https://SUA-API.onrender.com`. A escolha fica salva no navegador.
