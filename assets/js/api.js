// Catálogo, estoque e pedido sempre vêm da API.
const configured = (window.__API_BASE__ || '').trim().replace(/\/$/, '');
const parameter = new URLSearchParams(location.search).get('api');
if (parameter) localStorage.setItem('api_base', parameter.trim().replace(/\/$/, ''));

function base() {
  const url = localStorage.getItem('api_base') || configured ||
    (['localhost', '127.0.0.1'].includes(location.hostname) ? 'http://localhost:3001' : '');
  if (!url || !/^https?:\/\//.test(url)) {
    throw new Error('API não configurada. Defina a URL do backend em assets/js/config.js.');
  }
  return url;
}

async function apiFetch(path, options) {
  let response;
  try {
    response = await fetch(`${base()}${path}`, options);
  } catch (error) {
    if (error.message?.startsWith('API não configurada')) throw error;
    throw new Error('Não foi possível conectar à API. No Render gratuito, a primeira chamada pode levar cerca de um minuto.');
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || `Erro da API (${response.status})`);
    error.code = data.error;
    error.details = data;
    throw error;
  }
  return data;
}

export async function loadProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  return { items: await apiFetch(`/api/products${query ? '?' + query : ''}`), source: 'API' };
}

export async function getProduct(id) {
  return { item: await apiFetch(`/api/products/${encodeURIComponent(id)}`), source: 'API' };
}

export async function checkout(items) {
  return apiFetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  });
}
