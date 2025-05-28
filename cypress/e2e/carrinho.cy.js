import Login from '../pages/login';
import Carrinho from '../pages/carrinho';
import Inventory from '../pages/inventory';

describe.only('Carrinho', () => {

    beforeEach(() => {
        Login.visitarPagina();
        cy.fixture('user').as('dados');
    });

    it('Adicionar produto ao carrinho com sucesso', function () {
        const usuario = this.dados.usuarioValido;

        Login.preencherCredenciais(usuario.username, usuario.password);
        cy.screenshot('Adicionar Produto');

        Inventory.addProdutoAoCarrinho();
        Inventory.validarProdutoNoIcone(1);

        Inventory.ArmazenaNomeProduto().then((nomeProduto) => {
            Carrinho.clicarNoIconeDoCarrinho();
            Carrinho.validarProdutoNoCarrinho(nomeProduto);
        });
    });
    it('Remover produto do carrinho na página do carrinho', function() {
        Login.preencherCredenciais(this.dados.usuarioValido.username, this.dados.usuarioValido.password);
        Inventory.addProdutoAoCarrinho();
        Inventory.validarProdutoNoIcone(1);
        Carrinho.clicarNoIconeDoCarrinho();
        cy.screenshot('remover produto');
        Carrinho.removerProduto();
        Carrinho.validarRemocaoDoProduto();

    });
})