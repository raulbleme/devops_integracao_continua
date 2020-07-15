class Cliente {
    constructor(nome, cpf) {
      this.nome = nome;
      this.cpf = cpf;
    }

    validarCpf(){
        return true;
    }
  }
  module.exports = Cliente;