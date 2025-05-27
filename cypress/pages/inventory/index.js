import {elements} from "./elements";
class Inventory{
validarAcessoPagina(){    
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    cy.screenshot('Acesso a página de inventário')  
}
validarProdutoNoIcone(qtd){
    cy.get(elements.numeroIcone).should('be.visible').and('have.text', String(qtd));
}
ArmazenaNomeProduto() {
    return cy.get(elements.primeiroProduto).first().invoke('text');
}
addProdutoAoCarrinho() {
    cy.get(elements.buttonAddToCart).first().within(() => {
        cy.contains('button', 'Add to cart').click();
    });
}
    
}

export default new Inventory();