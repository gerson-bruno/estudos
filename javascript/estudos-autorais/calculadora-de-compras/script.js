//Salvar no local storage
function salvarDados() {
  const listaItens = document.querySelectorAll('.lista li');
  const itens = [];

  listaItens.forEach((li) => {
    const texto = li.textContent;
    const partes = texto.split('R$');

    const nome = partes[0].replace(':', '').trim();
    const valor = parseFloat(partes[partes.length - 1]);

    itens.push({ nome, valor });
  });

  localStorage.setItem('listaCompras', JSON.stringify(itens));
}

function carregarDados() {
  const dados = localStorage.getItem('listaCompras');
  if (!dados) return;

  const itens = JSON.parse(dados);

  itens.forEach((item) => {
    const li = document.createElement('li');

    li.innerHTML = `<strong>${item.nome}</strong> - Total R$ ${item.valor.toFixed(2)}`;

    
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.className = 'btn-editar';

    btnEditar.addEventListener('click', () => {
      document.querySelector('#nome').value = item.nome;
      document.querySelector('#quantidade').value = 1;
      document.querySelector('#preco').value = item.valor;

      li.remove();
      atualizarTotalGeral();
      salvarDados();
    });

    
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.className = 'btn-remove';

    btnRemover.addEventListener('click', () => {
      li.remove();
      atualizarTotalGeral();
      salvarDados();
    });

  
    const acoes = document.createElement('div');
    acoes.className = 'acoes';
    acoes.appendChild(btnEditar);
    acoes.appendChild(btnRemover);

    li.appendChild(acoes);

    document.querySelector('.lista').appendChild(li);
  });

  atualizarTotalGeral();
}

//Atualizando o total geral
function atualizarTotalGeral() {
  const listaItens = document.querySelectorAll('.lista li');
  let soma = 0;

  listaItens.forEach((li) => {
  const texto = li.textContent;
  const partes = texto.split('R$');

  const valorItem = parseFloat(partes[partes.length - 1]);

  if (!isNaN(valorItem)) {
    soma += valorItem;
  }
});;

  document.querySelector('#valor-total-geral').textContent = soma.toFixed(2);
}

//Evento Clique
document.querySelector('#botao-add').addEventListener('click', () => {
  //Itens, quantidade e preço
  const inputNome = document.querySelector('#nome').value;
  const inputQuantidade = Number(document.querySelector('#quantidade').value);
  const inputPreco = Number(document.querySelector('#preco').value);

  //Preço final
  const precoFinal = (inputQuantidade * inputPreco).toFixed(2);

  //Validando se os campos foram preenchidos e apagando o alerta apos 3 segundos
  if (!inputNome || !inputPreco || !inputQuantidade) {
    document.querySelector('.requerid').textContent =
      'Por favor, preencha todos os campos!';
    setTimeout(() => {
      document.querySelector('.requerid').textContent = '';
    }, 3000);
    return;
  }

  
  //Editar unidade
  const btnEditar = document.createElement('button');
  btnEditar.className = 'btn-editar';

  //Remover unidade
  const btnRemover = document.createElement('button');
  btnRemover.className = 'btn-remove';

  const acoes = document.createElement('div');
    acoes.className = 'acoes';
    acoes.appendChild(btnEditar);
    acoes.appendChild(btnRemover);

  //Adicionando o item da lista na pagina com o nome e preço final unitário
  const li = document.createElement('li');
  const info = document.createElement('div');
  info.className = 'info';
  li.innerHTML = `<strong>${inputNome}</strong> - Quantidade: ${inputQuantidade} - Valor unitário R$ ${inputPreco} - Total R$ ${precoFinal}`;
  document.querySelector('.lista').appendChild(li);
  li.appendChild(info);
  li.appendChild(acoes);
  atualizarTotalGeral();
  salvarDados();


  //Editando um item da lista
  btnEditar.textContent = 'Editar';

btnEditar.addEventListener('click', () => {
  const texto = li.textContent;

  const nome = texto.split('Quantidade:')[0].trim();

  const quantidade = Number(
    texto.split('Quantidade:')[1].split('-')[0].trim()
  );

  const preco = Number(
    texto.split('Valor unitário R$')[1].split('-')[0].trim()
  );

  document.querySelector('#nome').value = nome;
  document.querySelector('#quantidade').value = quantidade;
  document.querySelector('#preco').value = preco;
  li.remove();
  atualizarTotalGeral();
  salvarDados();
});
  
  //Removendo um item da lista
  btnRemover.textContent = 'Remover';
  btnRemover.addEventListener('click', () => {
    li.remove();
    atualizarTotalGeral();
    salvarDados();
  });

  

  //Limpar os inputs
  document.querySelector('#nome').value = '';
  document.querySelector('#quantidade').value = '1';
  document.querySelector('#preco').value = '';
  document.querySelector('#nome').focus();
});

document.querySelector('#botao-limpar').addEventListener('click', () => {
  document.querySelector('.lista').innerHTML = '';
  atualizarTotalGeral();
  salvarDados();
});

carregarDados();
