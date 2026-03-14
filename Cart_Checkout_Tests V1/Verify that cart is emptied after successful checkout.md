# Test: Verify that cart is emptied after successful checkout

## Objective
To confirm that the shopping cart is cleared after the user completes checkout, preventing duplicate or unintended orders.

## Precondition
- User is logged in as standard_user
- Checkout process has been completed successfully
- User is on "Checkout: Complete" page

## Steps
1. Click the "Back Home" button
2. From PLP, click the cart icon in the header
3. ​Verify that cart is empty

## Expected Results
- Redirects to PLP
- Cart item quantity notification is removed from cart icon
- Redirects to cart page with no items in the cart

## Priority
High
