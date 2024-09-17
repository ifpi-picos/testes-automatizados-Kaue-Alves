export default class ContaBancaria {
  private numeroConta: number
  private agencia: number
  private saldo: number
  private extrato: string[] // Armazena o histórico de operações realizadas na conta (depósitos, saques, transferências).

  public constructor() {
    this.numeroConta = 0
    this.agencia = 0
    this.saldo = 0
    this.extrato = []
  }

  public depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor
      this.extrato.push(`Depósito de R$ ${valor.toFixed(2)}`)
      return this.saldo
    } else {
      throw new Error("Valor inválido");
    }
  }

  public sacar(valor: number) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor
      this.extrato.push(`Saque de R$ ${valor.toFixed(2)}`)
      return this.saldo
    } else {
      throw new Error("Valor inválido ou saldo insuficiente");
    }
  }

















   
  
  
  // 1. **depositar(valor: number)**: Permite realizar um depósito na conta, aumentando o saldo.
  // 2. **sacar(valor: number)**: Permite realizar um saque, diminuindo o saldo, desde que o valor seja válido e não exceda o saldo disponível.

  // 4. **consultarSaldo()**: Retorna o saldo atual da conta.
  
/*
3. **transferir(valor: number, contaDestino: ContaBancaria)**: Realiza a transferência de um valor para outra conta bancária, diminuindo o saldo da conta origem e aumentando o saldo da conta destino.
5. **exibirExtrato()**: Exibe o histórico de transações (extrato) realizadas na conta.
6. **registrarOperacao(descricao: string)**: Método privado para registrar cada operação no extrato da conta, incluindo a data e a descrição da transação.
*/
  
}