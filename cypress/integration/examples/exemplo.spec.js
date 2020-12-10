describe ('Primeiro Teste', () => {//discribe from Mocha: Biblioteca Básica de roteiro de teste.
    it('Exemplos Cypress', () => {
        cy.visit('https://example.cypress.io');
        expect (true).to.equal(true)//expect from Chai: Biblioteca de acertividade do teste (certo/errado)
    })


})