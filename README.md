# CIC SHOP — loja

Loja estática de demonstração. Catálogo, detalhes, estoque e finalização usam a API CIC SHOP; IDs e quantidades do carrinho ficam no navegador. Não há pagamento real.

## Executar localmente

Nesta pasta, execute `npx http-server -p 8140 .` e abra `http://localhost:8140`. A configuração padrão aponta para a API publicada. Para usar uma API local na porta 3001, abra `http://localhost:8140/?api=http://localhost:3001`.

## Publicação no GitHub Pages

Loja: https://caua019m.github.io/cic-shop-frontend/

API configurada em `assets/js/config.js`: https://cic-shop-backend.onrender.com. Os arquivos desta pasta estão na raiz da branch `main`; o Pages publica `/ (root)`.

Para experimentar outra API sem editar o arquivo, abra a loja com `?api=https://SUA-API.onrender.com`. A escolha fica salva no navegador.
