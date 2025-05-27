import {elements as elcarrinho} from "./elements.js";
import {elements} from "../inventory/elements.js";


class carrinho{
    clicarNoIconeDoCarrinho() {
    cy.get(elements.buttonCarrinho).click();
  }
  validarProdutoNoCarrinho(nomeProduto) {
    cy.get(elcarrinho.primeiroProduto)
      .should('contain.text', nomeProduto);
  }
   removerProduto() {
    cy.get(elcarrinho.buttonRemove).click();
  }
  validarRemocaoDoProduto(){
    cy.get(elcarrinho.primeiroProduto).should('not.exist');
  }




  
}

export default new carrinho();
export { elements };