class Carro {
    constructor(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    info() {
        console.log(`${this.modelo} - ${this.ano} - ${this.cor}`);
    }
}

const carroAzul = new Carro('Civic', 2020, 'Azul');
const carroPreto = new Carro('Gol', 2015, 'Preto');
const carroCinza = new Carro('Palio', 2009, 'Cinza');
const carroVermelho = new Carro('Onix', 2022, 'Vermelho');

carroAzul.info();
carroPreto.info();
carroCinza.info();
carroVermelho.info();
