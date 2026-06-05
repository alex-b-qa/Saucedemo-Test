Title: [Checkout] Cart quantity notification not removed after deleting item 


ID: ST-7


Severity: Medium


Environment: 

*  Browser: Safari 26.2 
*  MacOS: Tahoe 26.2


Preconditions: 

*  User is logged in as standard_user
*  "Sauce Labs Onesie" is added to the cart (Quantity: 1)

Steps to Reproduce:

*  Step 1: Open saucedemo.com/cart.html in Tab A
*  Step 2: Open the same URL in Tab B
*  Step 3: In Tab B, click "Remove" for the "Sauce Labs Onesie"
*  Step 4: Switch back to Tab A
*  Step 5: Refresh the page or click the cart icon


Expected Result: 

*  Product is removed from cart
*  Cart icon badge in Tab A should be removed from the cart icon in Tab A


Actual Result:

*  Product is removed from cart
*  Cart badge icon is still present on the cart icon in Tab A


## Related Test Case: ST-T22 Cart consistency across multiple browser tabs