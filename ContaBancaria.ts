export default class ContaBancaria {
  private numeroConta: number
  private agencia: number
  private saldo: number = 0
  private extrato: string[] // Armazena o histórico de operações realizadas na conta (depósitos, saques, transferências).
  
  // 1. **depositar(valor: number)**: Permite realizar um depósito na conta, aumentando o saldo.

  public depositar(valor: number) {
    if (valor) {
      return this.saldo += valor
    } else {
      return "O valor do depósito não pode ser nulo ou negativo."
    }
  }
  
  // 2. **sacar(valor: number)**: Permite realizar um saque, diminuindo o saldo, desde que o valor seja válido e não exceda o saldo disponível.
  
  public sacar(valor: number) {
    if (valor) {
      return this.saldo -= valor
    } else {
      return "O valor do saque não pode ser nulo ou negativo."
    }
  }
  
  // 4. **consultarSaldo()**: Retorna o saldo atual da conta.
  
  public consultarSaldo() {
    return `Saldo atual da conta: R$ ${this.saldo}`
  }
  
  
/*
3. **transferir(valor: number, contaDestino: ContaBancaria)**: Realiza a transferência de um valor para outra conta bancária, diminuindo o saldo da conta origem e aumentando o saldo da conta destino.
5. **exibirExtrato()**: Exibe o histórico de transações (extrato) realizadas na conta.
6. **registrarOperacao(descricao: string)**: Método privado para registrar cada operação no extrato da conta, incluindo a data e a descrição da transação.
*/
  
}
