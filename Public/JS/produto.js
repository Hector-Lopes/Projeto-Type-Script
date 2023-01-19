export class Produto { 
    #nome; 
    #quantidade; 
    #valor; 
 
    constructor(nome, quantidade, valor) { 
       this.#nome = nome; 
        this.#quantidade = quantidade; 
        this.#valor = valor; 
    } 
 
    get nome() { 
        return this.#nome; 
    } 
 
    get quantidade() { 
        return this.#quantidade; 
    } 
 
    get valor() { 
        return this.#valor; 
    } 
 
    get volume() { 
        return this.#quantidade * this.#valor; 
    } 
}