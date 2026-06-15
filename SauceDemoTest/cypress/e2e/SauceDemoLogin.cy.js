/// <reference types="cypress" />

beforeEach('Open test application', () => {
    cy.visit('/')
})

describe('standardLogin', () => {

    it('loginTest', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    
})


describe('lockedLogin', () => {

    it('loginTest', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    
})


describe('problemLogin', () => {

    it('loginTest', () => {
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    
})



describe('performanceLogin', () => {

    it('loginTest', () => {
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    
})


describe('errorLogin', () => {

    it('loginTest', () => {
        cy.get('[data-test="username"]').type('error_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    
})


describe('visualLogin', () => {

    it('loginTest', () => {
        cy.get('[data-test="username"]').type('visual_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
    
})