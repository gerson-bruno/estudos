class Caneta {
    constructor(modelo, cor, ponta, carga, tampada) {
        this.modelo = modelo;
        this.cor = cor;
        this.ponta = ponta;
        this.carga = carga;
        this.tampada = tampada;
    }

    status() {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ponta: ${this.ponta}`);
        console.log(`Carga: ${this.carga}`);
        console.log(`Tampada: ${this.tampada}`);
    }

    rabiscar() {
        if (this.tampada) {
            console.log('Não posso rabiscar, estou tampada!');
        } else if (this.carga <= 0) {
            console.log('Não posso rabiscar, estou sem carga!');
        } else {
            console.log('Estou rabiscando...');
        }
    }
}

export default Caneta;