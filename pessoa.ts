export class Pessoa {
  nome: any;
  idade: any;
  sexo: any;
  altura: any;
  dataCadastro: any;
  constructor(nome: any, idade: any, sexo: any, altura: any) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.altura = altura;
    this.dataCadastro = new Date();
  }
  //static bom = "bom";
  mostrar() {
    return this.nome;
  }
};
