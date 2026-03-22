# Test: Verify items can be removed from cart on PDP

## ID: ST-T13

## Priority: High

## Objective
Test whether products can be removed from the cart from PDP

## Precondition
- User is logged in as error_user
- User on the PDP for "Sauce labs Backpack" (inventory-item.html?id=4)
- "Sauce labs Backpack" has been added to cart

## Steps
1. Click on "Remove" button

## Expected Results
- Item is removed from cart
- "Remove" button reverts back to "Add to Cart" button
- Cart badge icon is removed from cart icon


## Linked Bug: ST-10 Unable to remove "Sauce Labs Backpack" From cart on PDP

