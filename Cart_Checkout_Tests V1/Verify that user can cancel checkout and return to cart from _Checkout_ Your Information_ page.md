# Test: Verify that user can cancel checkout and return to cart from "Checkout: Your Information" page

## Objective
To ensure the user can cancel the checkout process from the "Checkout: Your Information" page and return to the cart without losing cart contents.

## Precondition
- User is logged in as standard_user
- At least one item is in the cart
- User clicks "Checkout"
- User is on "Checkout: Your Information" page

## Steps
1. Click "Cancel"
2. Verify the page title
2. ​Observe that cart contents are ​still present

## Expected Results
- Redirects back to "Your Cart" page
- Items added prior to starting checkout remain in the cart
- Quantity notification stays on cart icon with the correct quantity

## Priority
Normal
