# Test: Cart consistency across multiple browser tabs

## ID: ST-T22

## Priority: Normal

## Objective
Verify that cart stays consistent against multiple browser tabs

## Precondition
- User is using the Safari browser
- User is logged in to saucedemo.com as standard_user
- User is on PLP
- Cart is empty

## Steps
1. Add "Sauce Labs Onesie" to the cart from the PLP.
2. Open a second browser tab and navigate to the Cart page.
3. In the second tab, click "Remove" on the "Sauce Labs Onesie."
4. Return to the first tab and refresh the page.
5. Observe the cart icon and the cart list.

## Expected Results
- Step 3: The product is removed from the list and the cart icon badge disappears in the second tab.
- Step 5: After refresh, the first tab also shows an empty cart and no badge on the cart icon.


## Linked Bug: ST-7 Cart quantity notification not removed after deleting item 