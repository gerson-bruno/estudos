document.getElementById('btnCalcular').addEventListener('click', (event) => { event.preventDefault();
    const etanol = Number(document.getElementById('txtEtanol').value);
    const gasolina = Number(document.getElementById('txtGasolina').value);
    const img = document.getElementById('img');
    if(etanol / gasolina < 0.7){
        img.src = 'img/etanol.png';
    } else {
        img.src = 'img/gasolina.png';
}
});

document.querySelector('#btnLimpar').addEventListener('click', () => {
    document.getElementById('txtEtanol').value = '';
    document.getElementById('txtGasolina').value = '';
    document.getElementById('img').src = 'img/neutro.png';
});