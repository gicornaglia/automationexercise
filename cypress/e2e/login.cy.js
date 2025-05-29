import Login from '../pages/login';
import Inventory from '../pages/inventory';

describe('Login', () => {
    beforeEach(() => {
        Login.visitarPagina();
        cy.fixture('user').as('dados'); // Carrega a fixture uma vez antes de cada teste
    });
    it('Realizar login com sucesso', function () {
        const usuario = this.dados.usuarioValido;
        Login.preencherCredenciais(usuario.username, usuario.password);
        Inventory.validarAcessoPagina();
    });
    it('Realizar login inválido', function () {
        const usuario = this.dados.usuarioInvalido;
        Login.preencherCredenciais(usuario.username, usuario.password);
        Login.validarCredenciaisInvalidas();
    });
});
