# Test: Verify that total price is calculated correctly during checkout

## Objective
To ensure that item total, tax, and final total displayed during checkout are calculated correctly.

## Precondition
- User is logged in as standard_user
- At least one item is added to the cart
- User has entered valid checkout information and is on the “Checkout: Overview” page

## Steps
1. ​Confirm ​Item ​Total is correct

## Expected Results
- Item total is the sum of all items in the cart 
- Tax matches expected percentage of item total
- Total equals the sum of the Item Total + Tax

## Priority
High
