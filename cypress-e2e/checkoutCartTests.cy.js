/// <reference types="cypress" />



describe('Checkout Test Cases', () => {

    beforeEach('Open test application', () => {
    cy.visit('/')

    })


// Successful checkout happy path
    it('Successful checkout with valid information - ST-T16', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('contain', '/cart.html')
        cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('Vince')
        cy.get('[data-test="lastName"]').type('Shepherd')
        cy.get('[data-test="postalCode"]').type('28777')
        cy.get('[data-test="continue"]').click()
        cy.url().should('contain', '/checkout-step-two.html')
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain', 'Thank you for your order!')
        cy.get('[data-test="back-to-products"]').click()
        cy.get('[data-test="inventory-list"]').should('be.visible')
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        cy.get('[data-test="shopping-cart-link"]').click() 
        cy.get('[data-test="item-quantity"]').should('not.exist')

})

it('Checkout displays error when required fields are missing - ST-T18', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('contain', '/cart.html')
        cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="continue"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="error"]').should('exist').and('contain', 'First Name is required')

})


it('Cancel checkout and return to cart from "Checkout: Your Information" page - ST-T20', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('contain', '/cart.html')
        cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack').should('be.visible')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="cancel"]').click()
        cy.url().should('contain', '/cart.html')
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="item-quantity"]').should('exist')

})


it('User cannot proceed to checkout with empty cart - ST-T21', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('contain', '/cart.html')
        cy.get('[data-test="item-quantity"]').should('not.exist')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/cart.html')
        cy.get('[data-test="error"]').should('be.visible') 
        // Expected behavior: application should block checkout with empty cart
        // Defect: No error message currently displayed. User can proceed to checkout with no items in cart
    })
})