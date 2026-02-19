const baseUrl = 'http://localhost:3000';

async function fetchSelecoes() {
  try {
    const res = await fetch(`${baseUrl}/selecoes`);
    if (!res.ok) throw new Error('Erro na requisição');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

function createCard(data) {
  const tpl = document.getElementById('card-template');
  const node = tpl.content.cloneNode(true);
  node.querySelector('.logo').src = data.logo || '';
  node.querySelector('.logo').alt = `${data.nome} logo`;
  node.querySelector('.nome').textContent = data.nome;
  node.querySelector('.grupo').textContent = `Grupo ${data.grupo || '-'}`;
  const meta = node.querySelector('.meta');
  meta.textContent = `${(data.jogadores || []).length} jogadores`;

  const jogadoresList = node.querySelector('.jogadores');
  (data.jogadores || []).forEach(j => {
    const li = document.createElement('li');
    li.textContent = `${j.nome} — #${j.camisa} — ${j.posicao} ${j.titular ? '(titular)' : ''}`;
    jogadoresList.appendChild(li);
  });

  const conquistasList = node.querySelector('.conquistas');
  (data.conquistas || []).forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.ano} — ${c.pais}`;
    conquistasList.appendChild(li);
  });

  const btn = node.querySelector('.toggle');
  const details = node.querySelector('.details');
  btn.addEventListener('click', () => {
    const isHidden = details.classList.toggle('hidden');
    btn.textContent = isHidden ? 'Ver jogadores' : 'Ocultar';
  });

  return node;
}

function render(selecoes) {
  const container = document.getElementById('secoes');
  const empty = document.getElementById('empty');
  container.innerHTML = '';
  if (!selecoes || selecoes.length === 0) {
    empty.textContent = 'Nenhuma seleção encontrada.';
    return;
  }
  empty.style.display = 'none';
  selecoes.forEach(s => container.appendChild(createCard(s)));
}

function applySearch(selecoes) {
  const search = document.getElementById('search');
  search.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const filtered = selecoes.filter(s => s.nome.toLowerCase().includes(q) || (s.grupo||'').toLowerCase().includes(q));
    render(filtered);
  });
}

// bootstrap
(async function init(){
  const selecoes = await fetchSelecoes();
  const empty = document.getElementById('empty');
  if (!selecoes || selecoes.length === 0) {
    empty.textContent = 'Não foi possível carregar seleções. Verifique a API.';
    return;
  }
  render(selecoes);
  applySearch(selecoes);
})();
