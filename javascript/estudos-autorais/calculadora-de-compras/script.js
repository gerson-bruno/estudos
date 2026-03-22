  //Atualizando o total geral
  function atualizarTotalGeral() {
  const listaItens = document.querySelectorAll('.lista li');
  let soma = 0;

  listaItens.forEach(li => {
    // Pegamos o texto do LI, separamos pelo "R$" e pegamos o número
    const texto = li.textContent;
    const partes = texto.split('R$');
    const valorItem = parseFloat(partes[1]);
    
    if (!isNaN(valorItem)) {
      soma += valorItem;
    }
  });

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

  //Remover unidade
  const btnRemover = document.createElement('button');
  btnRemover.className = 'btn-remove';

  //Validando se os campos foram preenchidos e apagando o alerta apos 3 segundos
  if (!inputNome || !inputPreco || !inputQuantidade) {
    document.querySelector('.requerid').textContent = 'Por favor, preencha todos os campos!';
    setTimeout(() => {
    document.querySelector('.requerid').textContent = '';
    }, 3000);
    return;
  }

  //Adicionando o item da lista na pagina com o nome e preço final unitário
  const li = document.createElement('li');
  li.innerHTML = `<strong>${inputNome}:</strong> R$${precoFinal}`;
  document.querySelector('.lista').appendChild(li);
  atualizarTotalGeral();

  //Removendo um item da lista
  btnRemover.textContent = 'Remover';
  li.appendChild(btnRemover);
  btnRemover.addEventListener('click', () => {
    li.remove();
    atualizarTotalGeral();
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
});



