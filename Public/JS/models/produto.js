export class Produto {
    constructor(nome, quantidade, valor) {
        this._nome = nome;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get nome() {
        return this._nome;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
alert("ola");
