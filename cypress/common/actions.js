const { Strings } = require("./strings");

function navigation() {

  function visitBugerEats() {
    cy.visit(Strings.url.paginaInicial)
  }

  return {
    visitBugerEats
  };
}

function element() {

  function clique(elemento) {
    cy.get(elemento).click()
  }

  function digite(elemento, valor) {
    cy.get(elemento).type(valor)
  }
  function anexarArquivo(elemento, arquivo) {
    cy.get(elemento).attachFile(arquivo);
  }

  function validarTexto(elemento, texto){
    cy.get(elemento).should('have.text', texto)
  }

  function cliqueElementoContendoTexto(elemento, texto){
    cy.get(elemento).contains(texto).click()
  }

  return {
    clique,
    digite,
    validarTexto,
    cliqueElementoContendoTexto,
    anexarArquivo

  };
}

module.exports = {
    navigation: navigation,
    element: element
};