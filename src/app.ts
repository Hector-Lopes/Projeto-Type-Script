import { Produto } from "./models/produto.js" 
import { ProdutoController } from "./controllers/produtocontroller.js";

const produto = new Produto("Batata",10,100) 
const produtocontroller= new ProdutoController();
const formulario =document.querySelector(".form1");
formulario.addEventListener('submit',event=>{
event.preventDefault();
produtocontroller.salvarprodtuo();

})