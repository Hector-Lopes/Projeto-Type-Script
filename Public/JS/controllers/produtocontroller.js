export class ProdutoController {
    constructor() {
        this.nome1 = document.querySelector("#nome");
        this.valor = document.querySelector("#valor");
        this.quantidade = document.querySelector("#quantidade");
    }
    salvarprodtuo() {
        console.log(this.nome1);
        console.log(this.valor);
        console.log(this.quantidade);
    }
}
