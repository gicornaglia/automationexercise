import { elements as el } from "./elements";
class Login {

    visitarPagina() {
        cy.visit('https://www.saucedemo.com/')
    }
    preencherCredenciais(user, password) {
        cy.get(el.username).type(user)
        cy.get(el.password).type(password)
        cy.get(el.loginButon).click()
    }
    validarCredenciaisInvalidas() {
        cy.get(el.msgErroCredencial).should('contain.text', 'Username and password do not match any user in this service');
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('Erro credenciais inválidas')
    }
}
export default new Login();

