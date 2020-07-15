const Cliente = require("../models/cliente")

test('Este teste precisa validar uma instância de cliente com CPF válido.', () => {
    let cliente = new Cliente("Raul Barboza Leme","111.111.111-37");
    expect(cliente.nome).not.beUndefined;
    expect(cliente.cpf).not.beUndefined;
    expect(cliente.validarCpf()).toBe(true);
});