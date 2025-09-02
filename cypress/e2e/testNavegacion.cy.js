///<reference types="cypress" />

describe('Practica Test de navegacion', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })
  
  it('Direcciona pagina Login', () => {
    cy.contains('.nav a','Login').click()
    cy.url().should('be.equal','https://notes-serverless-app.com/login')
  })

  it('Verificacion de href', () => {
    cy.contains('.nav a','Login').should('have.attr','href').and('not.have.attr','target')
  })
})