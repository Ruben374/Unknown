"use strict";
exports.__esModule = true;
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, sexo, altura) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.altura = altura;
        this.dataCadastro = new Date();
    }
    //static bom = "bom";
    Pessoa.prototype.mostrar = function () {
        return this.nome;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
;
