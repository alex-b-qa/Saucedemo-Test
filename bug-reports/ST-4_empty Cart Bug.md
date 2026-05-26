Title: [Checkout] User can complete checkout with an empty cart 

ID: ST-4


Severity: High
 

Environment: 

*  Browser: Safari 26.2 
*  MacOS: Tahoe 26.2


Preconditions: 


*  User is logged in as standard_user
*  User is on cart page
*  Cart is empty


Steps to Reproduce:

*  Step 1: Click “Checkout”


Expected Result: 

*  Error displays that cart is empty
*  Checkout is blocked
*  Page remains on the cart page (cart.html)



Actual Result: 

*  User is allowed to proceed all the way through checkout with empty cart


## Related Test Case: ST-T21 User cannot proceed to checkout with empty cart

