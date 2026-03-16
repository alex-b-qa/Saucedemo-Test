# Test: Verify items can be removed from cart from PLP

## Objective
Test whether a product's "remove" button works from PLP

## Precondition
- User is logged in as problem_user
- User is on PLP (inventory.html)
- Cart is empty

## Steps
1. Click "Add to Cart" for the "Sauce Labs Bike Light"
2. Click "Remove" button for the "Sauce Labs Bike Light" 
3. Observe the button state and cart icon badge

## Expected Results
- After Step 1: Cart icon badge displays "1" and "Add to Cart" button turns to "Remove" button
- After Step 2: "Remove" button reverts to "Add to Cart" button and cart icon badge is removed


## Priority
High
