///<reference types="cypress" />

describe('Codigo duplicado', () => {
  beforeEach(() => {
    cy.intercept('GET','**/search**').as('getStories')
    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
    cy.get('input[type="text"]').should('be.visible').and('have.value','redux').as ('searchField').clear()
  });

  it('Buscar elemento vuejs', () => {
    cy.get('@searchField').type('vuejs{enter}')
    cy.wait('@getStories')
    cy.get('.table-row').should('have.length',100)
  });

  it('Buscar elemento reactjs', () => {
    cy.get('@searchField').type('reactjs{enter}')
    cy.wait('@getStories')
    cy.get('.table-row').should('have.length',100)
  });

  it('Buscar elemento test', () => {
    cy.get('@searchField').type('test{enter}')
    cy.wait('@getStories')
    cy.get('.table-row').should('have.length',100)
  });

});