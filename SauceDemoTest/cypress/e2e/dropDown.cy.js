/// <reference types="cypress" />

beforeEach('Open test application', () => {
    cy.visit('/')
})


it('hamburger Button test', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

})
