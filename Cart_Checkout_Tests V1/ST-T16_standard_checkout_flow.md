# Test: Verify that user can successfully complete checkout with valid information

## ID: ST-T16

## Priority: Critical

## Objective
Test whether user can complete a full check out from cart to order with valid checkout details

## Precondition
- User is logged in as standard_user
- At least one item is added to the cart
- User is on the cart page

## Steps
1. Click the "Checkout" button.
2. Enter a valid First Name, Last Name, and Zip/Postal Code.
3. Click the "Continue" button.
4. On the "Checkout: Overview" page, click the "Finish" button.
5. Verify the "Checkout: Complete!" header is displayed.
6. Click the "Back Home" button.

## Expected Results
- Step 1: Redirects to the "Checkout: Your Information" page.
- Step 3: Redirects to the "Checkout: Overview" page. All items and totals are displayed 	                        
  correctly.
- Step 4: Redirects to the "Checkout: Complete!" page showing a "Thank you for your order!" 
  message.
- Step 5: The quantity notification badge on the cart icon is removed and the cart is empty.
- Step 6: Redirects back to the PLP.
