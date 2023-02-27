import { Produto } from "../models/produto.js";
export class ProdutoController {
    constructor() {
        this.nome1 = document.querySelector("#nome");
        this.valor = document.querySelector("#valor");
        this.quantidade = document.querySelector("#quantidade");
    }
    salvarprodtuo() {
        const prodtuo = new Produto(this.nome1.value, parseInt(this.quantidade.value), parseFloat(this.valor.value));
        console.log(prodtuo);
    }
}
