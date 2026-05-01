function capitalizar(vetor) {
  let modificado = [];
  for (let i = 0; i < vetor.length; i++) {
    let letraInicial = vetor[i][0].toUpperCase();
    let restoTexto = vetor[i].slice(1);
    let resultado = letraInicial + restoTexto;
    modificado[i] = resultado;
  }
  return modificado;
  console.log(modificado);
}

function ordenar(vetor) {
  return vetor.sort(function(a, b) {
    return a.localeCompare(b);
  });
}

function caixaAlta(vetor) {
  let modificado = [];
    for (let i = 0; i < vetor.length; i++) {
        let resultado = vetor[i].toUpperCase();
        modificado[i] = resultado;
    }
    return modificado;
}

export default { 
    capitalizar: capitalizar,
    ordenar: ordenar,
    caixaAlta: caixaAlta };