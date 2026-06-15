/// <reference types="cypress" />



describe('Checkout Test Cases', () => {

    beforeEach('Open test application', () => {
    cy.visit('/')

    })


// Successful checkout happy path
    it('Verify that user can successfully complete checkout with valid information - ST-T16', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('contain', '/cart.html')
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
        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        cy.get('[data-test="shopping-cart-link"]').click() 
        cy.get('[data-test="item-quantity"]').should('not.exist')

})

it('Verify that checkout displays error when required fields are missing - ST-T18', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('contain', '/cart.html')
        cy.get('[data-test="item-quantity"]').should('exist')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="continue"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="error"]').should('exist')

})


it('Verify that user can cancel checkout and return to cart from "Checkout: Your Information" page - ST-T20', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('contain', '/cart.html')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="cancel"]').click()
        cy.url().should('contain', '/cart.html')
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
        cy.get('[data-test="item-quantity"]').should('exist')

})


it('Verify user cannot proceed to checkout with empty cart - ST-T21', () => {
    cy.standardUserLogin('standard_user', 'secret_sauce')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="item-quantity"]').should('not.exist')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/cart.html')
        cy.get('[data-test="error"]').should('be.visible') 
        // Expected behavior: application should block checkout with empty cart
        // Defect: No error message currently displayed. User can proceed to checkout with no items in cart
    })
})
    

// Need to make sure i am verifying the inventory page after each login or add it to the custom command




/*

// Set up Price calculation here
// .08002668 percent sales tax

it('Verify that total price is calculated correctly during checkout - ST-T17', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('contain', '/inventory')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.url().should('contain', '/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('Vince')
        cy.get('[data-test="lastName"]').type('Shepherd')
        cy.get('[data-test="postalCode"]').type('28777')
        cy.get('[data-test="continue"]').click()
        cy.url().should('contain', '/checkout-step-two.html')       

//     // 1. Get the subtotal text and extract the number
//     // 1. Define the Sauce Demo tax rate at the top of your test
    const SAUCE_DEMO_TAX_RATE = 0.08002668;

    // 2. Get the subtotal from the screen
    cy.get('[data-test="subtotal-label"]').invoke('text').then((subtotalText) => {
        const subtotal = parseFloat(subtotalText.replace(/[^0-9.]/g, ''));

        // 3. Calculate what the tax SHOULD be based on that rate
        const expectedTax = subtotal * SAUCE_DEMO_TAX_RATE;

        // 4. Get the actual tax from the screen and assert they match
        cy.get('[data-test="tax-label"]').invoke('text').then((taxText) => {
            const actualTax = parseFloat(taxText.replace(/[^0-9.]/g, ''));

            // Check that the UI tax matches our calculated math within 1 cent
            expect(actualTax).to.be.closeTo(expectedTax, 0.01);
        });
    });
});
        // verify that tax is .08002668 of item total.
        // veryfiy that Total is tax plus item total
*/