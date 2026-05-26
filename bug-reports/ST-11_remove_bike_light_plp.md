Title: [Checkout] Unable to remove "Sauce Labs Bike Light" from cart on PLP


ID: ST-11


Severity: High


Environment: 

*  Browser: Safari 26.2 
*  MacOS: Tahoe 26.2


Preconditions: 

*  User is logged in as problem_user
*  User is on PLP


Steps to Reproduce:

*  Step 1: Add "Sauce Labs Bike Light" to the cart by clicking the "add to cart" button.
*  Step 2: Click the "Remove" button for the product that was added.


Expected Result: 

*  After Step 1: Product adds to cart. Cart icon shows quantity notification "1" in the the header.
*  After Step 2: Product should be removed from cart. Quantity notification should be removed from cart icon.


Actual Result:

*  After Step 1: Product was added to cart.
*  At Step 2: "Remove" button is not clickable. Product cannot be removed from the cart from PLP.


## Related Test Case: ST-T11 Remove items in cart from PLP