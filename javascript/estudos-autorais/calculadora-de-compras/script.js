const listaEl = document.querySelector('.lista');

// SALVAR DADOS 
function salvarDados() {
  const itens = [];

  document.querySelectorAll('.lista li').forEach((li) => {
    itens.push({
      nome: li.dataset.nome,
      quantidade: Number(li.dataset.quantidade),
      preco: Number(li.dataset.preco),
    });
  });

  localStorage.setItem('listaCompras', JSON.stringify(itens));
}

// CRIAR ITEM (REUTILIZÁVEL)
function criarItem({ nome, quantidade, preco }) {
  const li = document.createElement('li');

  const total = (quantidade * preco).toFixed(2);

  // salva dados no elemento
  li.dataset.nome = nome;
  li.dataset.quantidade = quantidade;
  li.dataset.preco = preco;

  // INFO
  const info = document.createElement('div');
  info.className = 'info';
  info.innerHTML = `
    <strong>${nome}</strong> 
    - Quantidade: ${quantidade} 
    - Valor unitário R$ ${preco} 
    - Total R$ ${total}
  `;

  // BOTÕES
  const btnEditar = document.createElement('button');
  btnEditar.textContent = 'Editar';
  btnEditar.className = 'btn-editar';

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.className = 'btn-remove';

  const acoes = document.createElement('div');
  acoes.className = 'acoes';
  acoes.appendChild(btnEditar);
  acoes.appendChild(btnRemover);

  // EDITAR
  btnEditar.addEventListener('click', () => {
    document.querySelector('#nome').value = li.dataset.nome;
    document.querySelector('#quantidade').value = li.dataset.quantidade;
    document.querySelector('#preco').value = li.dataset.preco;

    li.remove();
    atualizarTotalGeral();
    salvarDados();
  });

  // REMOVER
  btnRemover.addEventListener('click', () => {
    li.remove();
    atualizarTotalGeral();
    salvarDados();
  });

  li.appendChild(info);
  li.appendChild(acoes);

  listaEl.appendChild(li);
}


// CARREGAR
function carregarDados() {
  const dados = localStorage.getItem('listaCompras');
  if (!dados) return;

  const itens = JSON.parse(dados);

  itens.forEach(criarItem);

  atualizarTotalGeral();
}


// TOTAL
function atualizarTotalGeral() {
  let soma = 0;

  document.querySelectorAll('.lista li').forEach((li) => {
    const quantidade = Number(li.dataset.quantidade);
    const preco = Number(li.dataset.preco);

    soma += quantidade * preco;
  });

  document.querySelector('#valor-total-geral').textContent = soma.toFixed(2);
}


// ADICIONAR
document.querySelector('#botao-add').addEventListener('click', () => {
  const nome = document.querySelector('#nome').value.trim();
  const quantidade = Number(document.querySelector('#quantidade').value);
  const preco = Number(document.querySelector('#preco').value);

  if (!nome || !quantidade || !preco) {
    document.querySelector('.requerid').textContent =
      'Preencha todos os campos';
    setTimeout(() => {
      document.querySelector('.requerid').textContent = '';
    }, 3000);
    return;
  }

  criarItem({ nome, quantidade, preco });

  atualizarTotalGeral();
  salvarDados();

  // limpar
  document.querySelector('#nome').value = '';
  document.querySelector('#quantidade').value = 1;
  document.querySelector('#preco').value = '';
  document.querySelector('#nome').focus();
});


// LIMPAR

document.querySelector('#botao-limpar').addEventListener('click', () => {
  listaEl.innerHTML = '';
  atualizarTotalGeral();
  salvarDados();
});

// INIT
carregarDados();