export class Produto { 
    private _nome :string ; 
    private _quantidade :number; 
    private _valor :number; 
 
    constructor(nome :string, quantidade:number, valor:number) { 
       this._nome = nome; 
        this._quantidade = quantidade; 
        this._valor = valor; 
    } 
 
    get nome() :string { 
        return this._nome; 
    } 
 
    get quantidade():number { 
        return this._quantidade; 
    } 
 
    get valor() :number { 
        return this._valor; 
    } 
 
   


}



