///<reference types="cypress" />

describe('Codigo duplicado', () => {
  beforeEach(() => {
    cy.intercept('GET','**/search**').as('getStories')
    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
    cy.get('input[type="text"]').should('be.visible').as('searchField').and('have.value','redux').clear()
    });

  const searchTerms = ['vuejs', 'reactjs', 'test'];
  searchTerms.forEach(term => {
    it(`Buscar elemento ${term}`, () => {
      cy.search(term)
      cy.wait('@getStories')
      cy.get('.table-row').should('have.length',100)
    });
  })

  it.skip('Buscar elemento vuejs', () => {
    cy.get('@searchField').type('vuejs{enter}')
    cy.wait('@getStories')
    cy.get('.table-row').should('have.length',100)
  });

  it.skip('Buscar elemento reactjs', () => {
    cy.get('@searchField').type('reactjs{enter}')
    cy.wait('@getStories')
    cy.get('.table-row').should('have.length',100)
  });
})
