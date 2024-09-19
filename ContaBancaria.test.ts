import { beforeEach, describe, expect, test } from "bun:test";

import ContaBancaria from "./ContaBancaria.ts";

describe("Teste da classe ContaBancaria", () => {
  let conta: ContaBancaria
  let contaDois: ContaBancaria
  beforeEach(() => {
    conta = new ContaBancaria()
    contaDois = new ContaBancaria()
  })

  test("Método Depositar", () => {
    expect(conta.depositar(200)).toBe(200)
  })

  test("Método Depositar - Depósito Inválido", () => {
    expect(() => conta.depositar(-100)).toThrow("Valor inválido")
  })

  test("Método Sacar", () => {
    conta.depositar(300)
    expect(conta.sacar(200)).toBe(100)
  })
  
  test("Método Sacar - Saque Inválido", () => {
    expect(() => conta.sacar(-80)).toThrow("Valor inválido ou saldo insuficiente")
  })

  test("Método transferir", () => {
    conta.depositar(500)
    expect(conta.transferir(200, contaDois)).toBe(300)
  })

  test("Método transferir - Valor Inválido", () => {
    expect(() => conta.transferir(200, contaDois)).toThrow("Valor inválido ou saldo insuficiente")
  })
  
  test("Consultar Saldo", () => {
    conta.depositar(500)
    expect(conta.consultarSaldo()).toBe(`Seu saldo atual é de R$ 500`)
  })
  
  test("Exibir Extrato", () => {
    conta.depositar(200)
    conta.sacar(100)
    expect(conta.exibirExtrato()).toBe("1. Depósito de R$ 200.00 - 19/9/2024\n2. Saque de R$ 100.00 - 19/9/2024")
  })
})