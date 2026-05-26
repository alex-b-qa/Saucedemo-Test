/// <reference types="cypress" />


describe('Login Test Cases', () => {

    beforeEach('Open test application', () => {
    cy.visit('/')
    })


    it('Login with valid credentials - ST-T1', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('[data-test="inventory-list"]').should('be.visible')
    })
    

    it('Login with invalid username - S-T2', () => {
        cy.login('stan_user', 'secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface: Username and password')
    })


    it('Error displays when attempting login without credentials - ST-T3', () => {
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Username is required')
    })
    

    it('Login in with a locked out user ST-T4', () => {
        cy.login('locked_out_user', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'this user has been locked out')
    })
    


    it('Login with username and empty password - ST-T6', () => {
        cy.get('[data-test="username"]').type('error_user')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Password is required')
    })
    

    it('Login with invalid password and valid username - ST-T7', () => {
        cy.login('user', 'secret_')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Username and password do not match')
    })
    
})
