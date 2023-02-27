import { ProdutoController } from "./controllers/produtocontroller.js";
const produtocontroller = new ProdutoController();
const formulario = document.querySelector(".form1");
formulario.addEventListener('submit', event => {
    event.preventDefault();
    produtocontroller.salvarprodtuo();
});
