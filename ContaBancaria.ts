export default class ContaBancaria {
  private numeroConta: number;
  private agencia: number;
  private saldo: number;
  private extrato: string[]; // Armazena o histórico de operações realizadas na conta (depósitos, saques, transferências).

  public constructor() {
    this.numeroConta = 0;
    this.agencia = 0;
    this.saldo = 0;
    this.extrato = [];
  }

  public depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
      this.extrato.push(`Depósito de R$ ${valor.toFixed(2)}`);
      return this.saldo;
    } else {
      throw new Error("Valor inválido");
    }
  }

  public sacar(valor: number) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.extrato.push(`Saque de R$ ${valor.toFixed(2)}`);
      return this.saldo;
    } else {
      throw new Error("Valor inválido ou saldo insuficiente");
    }
  }

  private receberTransferencia(valor: number, conta: ContaBancaria) {
    conta.saldo += valor
    conta.extrato.push(`Transferência de R$ ${valor.toFixed()} recebida`)
  }

  public transferir(valor: number, conta: ContaBancaria) {
    if (valor > 0 && valor <= this.saldo) {
      conta.receberTransferencia(valor, conta)
      this.saldo -= valor
      this.extrato.push(`Transferência de R$ ${valor.toFixed(2)} realizada.`)
      return this.saldo;
    } else {
      throw new Error("Valor inválido ou saldo insuficiente");
    }
  }

  public consultarSaldo() {
    
    return `Seu saldo atual é de R$ ${this.saldo}`;
  }

  public exibirExtrato() {
    let extratoString = ""

    this.extrato.forEach((operacao, index) => {
      extratoString += `${index + 1}. ${operacao}\n`
    })
  
    return extratoString.trim()
  }
  
  /*

  5. **exibirExtrato()**: Exibe o histórico de transações (extrato) realizadas na conta.
6. **registrarOperacao(descricao: string)**: Método privado para registrar cada operação no extrato da conta, incluindo a data e a descrição da transação.
*/
}

let conta = new ContaBancaria
let contaDois = new ContaBancaria

conta.depositar(500)
conta.depositar(500)
conta.depositar(500)
conta.sacar(500)
conta.exibirExtrato()