import { beforeEach, describe, expect, test } from "bun:test";

import ContaBancaria from "./ContaBancaria.ts";

describe("Teste da classe ContaBancaria", () => {
  let conta: ContaBancaria
  beforeEach(() => {
    conta = new ContaBancaria()
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
    expect(() => expect(conta.sacar(-80)).toThrow("Valor inválido ou saldo insuficiente"))
  })

})