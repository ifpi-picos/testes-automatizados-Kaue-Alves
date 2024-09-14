import { beforeEach, describe, expect, test } from "bun:test";

import ContaBancaria from "./ContaBancaria.ts";

describe ("Teste da classe ContaBancaria", () => {
  
  let conta: ContaBancaria
  beforeEach(() => {
    conta = new ContaBancaria()
  })
  
  test("Teste da funcão depositar", () => {
    conta.depositar(500)
    expect(conta.consultarSaldo()).toBe(`Saldo atual da conta: R$ 500`)
  })
})
