export class Produto { 
    private _nome; 
    private _quantidade; 
    private _valor; 
 
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
 
    get volume() { 
        return this._quantidade * this._valor; 
    } 
}