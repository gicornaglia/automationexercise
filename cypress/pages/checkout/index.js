import { elements as elCheckout } from "./elements";
import carrinho from '../carrinho';
import Inventory from '../inventory';
class Checkout {

    acessarCheckout() {
        Inventory.addProdutoAoCarrinho();
        carrinho.clicarNoIconeDoCarrinho();
        cy.get(elCheckout.buttonCheckout).click();
    }
    validarCampoInvalidos() {
        cy.get(elCheckout.campoFirstName).type(''); 
        cy.get(elCheckout.campoLastName).type('');  
        cy.get(elCheckout.campoCodigoPostal).type(''); 

        cy.get(elCheckout.buttonContinue).click();

        // Valida se aparece alguma mensagem de erro
        cy.get(elCheckout.msgErro).then(($error) => {
            if ($error.is(':visible')) {
                const errorText = $error.text();
                if (errorText.includes('Error: First Name is required')) {
                    cy.log('Erro: First Name obrigatório');
                } else if (errorText.includes('Error: Last Name is required')) {
                    cy.log('Erro: Last Name obrigatório');
                } else if (errorText.includes('Error: Postal Code is required')) {
                    cy.log('Erro: Postal Code obrigatório');
                } else {
                    cy.log('Outro erro: ' + errorText);
                }
            } else {
                cy.log('Nenhum erro encontrado — formulário válido.');
            }
        });
    }


}
export default new Checkout();