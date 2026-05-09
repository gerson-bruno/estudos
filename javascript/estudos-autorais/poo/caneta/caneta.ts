class Caneta {
    private modelo: string;
    private cor: string;
    private ponta: number;
    protected carga: number;
    protected tampada: boolean;

    constructor(
        modelo: string,
        cor: string,
        ponta: number,
        carga: number,
        tampada: boolean
    ) {
        this.modelo = modelo;
        this.cor = cor;
        this.ponta = ponta;
        this.carga = carga;
        this.tampada = tampada;
    }

    status(): void {
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ponta: ${this.ponta}`);
        console.log(`Carga: ${this.carga}%`);
        console.log(`Tampada: ${this.tampada ? 'Sim' : 'Não'}`);
    }

    rabiscar(): void {
        if (this.tampada) {
            console.log('Não posso rabiscar, a caneta está tampada!');
        } else if (this.carga <= 0) {
            console.log('Não posso rabiscar, a caneta está sem carga!');
        } else {
            console.log('Estou rabiscando...');
        }
        }
}

export default Caneta;