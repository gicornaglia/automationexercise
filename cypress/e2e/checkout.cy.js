import Login from '../pages/login';
import carrinho from '../pages/carrinho';
import Inventory from '../pages/inventory';
import Checkout from '../pages/checkout';
import checkout from '../pages/checkout';

describe.only('Checkout', () => {

    beforeEach(() => {
        Login.visitarPagina();
        cy.fixture('user').as('dados');
    });

    it('Validar formulário do checkout com dados inválidos', function () {
        Login.preencherCredenciais(this.dados.usuarioValido.username, this.dados.usuarioValido.password);
        Checkout.acessarCheckout();
        checkout.validarCampoInvalidos();

        
    })
})