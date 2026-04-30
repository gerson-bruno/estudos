class Conta {
  constructor(numero, titular, saldo, limite) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
    this.limite = limite;
  }

  sacar(valor, exibirMensagem = true) {
    if (valor <= 0) {
      if (exibirMensagem) {
        console.log('Valor de saque inválido');
      }
      return false;
    } else if (valor > this.saldo + this.limite) {
      if (exibirMensagem) {
        console.log('Saldo insuficiente');
      }
      return false;
    } else {
      this.saldo -= valor;
      if (exibirMensagem) {
        console.log(
          `Saque de R$${valor} realizado. \nSaldo atual: R$${this.saldo}`,
        );
      }
      return true;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log('Valor de depósito inválido');
      return;
    } else {
      this.saldo += valor;
    }
  }

  transferir(valor, contaDestino) {
    if (this.sacar(valor, false)) {
      contaDestino.depositar(valor);
      console.log(`Transferência de R$${valor} realizada.`);
      console.log(`Seu saldo atual é de: R$${this.saldo}`);
    } else {
      console.log('Transferência não realizada');
    }
  }

  info() {
    console.log(
      `Conta: ${this.numero} - Titular: ${this.titular} - Saldo: R$${this.saldo} - Limite: R$${this.limite}`,
    );
  }
}

const conta1 = new Conta('12345-6', 'Gerson', 1000, 500);
const conta2 = new Conta('65432-1', 'Maria', 2000, 1000);
const conta3 = new Conta('11111-1', 'João', 500, 300);
const conta4 = new Conta('22222-2', 'Ana', 1500, 700);
const conta5 = new Conta('33333-3', 'Carlos', 0, 400);

/* conta1.sacar(200);
conta2.sacar(2500);
conta3.sacar(0);
conta4.sacar(1000);
conta5.sacar(250); */

/* conta1.depositar(500);
conta2.depositar(1000);
conta3.depositar(200);
conta4.depositar(300);
conta5.depositar(400); */

/* conta1.transferir(300, conta2);
conta2.transferir(500, conta3);
conta3.transferir(100, conta4);
conta4.transferir(200, conta5);
conta5.transferir(50, conta1); */

conta1.info();
console.log('---');
conta1.sacar(200);
console.log('---');
conta1.transferir(300, conta2);
console.log('---');
conta1.info();
conta2.info();
