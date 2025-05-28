import Login from '../pages/login';
import { elements as elCheckout } from "../pages/checkout/elements";
import Checkout from '../pages/checkout';
import checkout from '../pages/checkout';

describe.only('Checkout', () => {

    beforeEach(() => {
        Login.visitarPagina();
        cy.fixture('user').as('dados');
    });

    it('Validar campo First Name com dados inválidos', function () {
        Login.preencherCredenciais(this.dados.usuarioValido.username, this.dados.usuarioValido.password);
        Checkout.acessarCheckout();
        checkout.validarCampoInvalidos(elCheckout.campoFirstName);      
    });
    it('Validar campo Last Name com dados inválidos', function(){
        Login.preencherCredenciais(this.dados.usuarioValido.username, this.dados.usuarioValido.password);
        Checkout.acessarCheckout();
        checkout.validarCampoInvalidos(elCheckout.campoLastName); 
    });
    it('Validar campo Postal Code com dados inválidos', function(){
        Login.preencherCredenciais(this.dados.usuarioValido.username, this.dados.usuarioValido.password);
        Checkout.acessarCheckout();
        checkout.validarCampoInvalidos(elCheckout.campoCodigoPostal); 
    });
    it('Validar Formulário Checkout', function(){
        Login.preencherCredenciais(this.dados.usuarioValido.username, this.dados.usuarioValido.password);
        Checkout.acessarCheckout();
        checkout.preencherFormulario();
        cy.get(elCheckout.msgTotal).should('exist');       
    });
    it('Validar compra', function(){
        Login.preencherCredenciais(this.dados.usuarioValido.username, this.dados.usuarioValido.password);
        Checkout.acessarCheckout();
        checkout.preencherFormulario();
        cy.get(elCheckout.buttonFinish).click();  
        cy.get(elCheckout.msgThankYou,{ timeout: 10000 }).should('have.text', 'Thank you for your order!');   
    });
})