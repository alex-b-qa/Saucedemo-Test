# Test: Checkout displays error when required fields are missing

## ID: ST-T18

## Priority: High

## Objective
Verify that the system prevents checkout progression and displays an appropriate error message when mandatory checkout information is not provided.

## Precondition
- User is logged in as standard_user
- At least one item is added to cart
- User is on the "Checkout: Your Information" page (checkout-step-one.html)

## Steps
1. Leave the "First Name", "Last Name", and "Zip/Postal Code" fields empty
2. Click "Continue"

## Expected Results
- Checkout page does not redirect to overview page
- Validation error is displayed indicating at the bottom of the form indicating "First Name is required" 