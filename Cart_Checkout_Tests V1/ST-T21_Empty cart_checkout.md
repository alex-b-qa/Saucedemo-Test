# Test: Verify user cannot proceed to checkout with empty cart

## ID: ST-T21

## Priority: Medium

## Objective
Test whether a user can complete check out with an empty cart

## Precondition
- User is logged in as standard_user
- User is on cart page (cart.html)
- Cart is empty

## Steps
1. Click "Checkout"

## Expected Results
- Error displays that cart is empty
- Checkout is blocked
- Site remains on cart page (cart.html)


## Linked Bug: ST-4 User can complete checkout with an empty cart 