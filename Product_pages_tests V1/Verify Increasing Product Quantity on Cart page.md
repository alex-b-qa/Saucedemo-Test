# Test: Verify Increasing Product Quantity on Cart page

## Objective
Test whether you can increase the quantity of a product in the cart page

## Precondition
- User is logged in as standard user
- User has added "Sauce Labs Backpack" to the cart
- User is on cart page (cart.html)

## Steps
1. Click inside the quantity selector box for the "Sauce Labs Backpack" (29.99)
2. Delete the existing value and type "2."
3. Click the mouse outside of the box or hit enter to commit the change

## Expected Results
- Quantity field accepts numerical input and shows "2"
- Price total should update accordingly (59.98)
- Cart icon badge shows a total of 2 items

## Priority
High
