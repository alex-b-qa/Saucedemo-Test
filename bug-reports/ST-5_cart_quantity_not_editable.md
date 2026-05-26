Title: [Checkout] Cart quantity selector not editable and total price not updating


ID: ST-5


Severity: High


Environment: 

*  Browser: Safari 26.2 
*  MacOS: Tahoe 26.2


Preconditions: 

*  User is logged in as standard_user
*  User has added "Sauce Labs Backpack" to the cart
*  User is on the cart page (cart.html)


Steps to Reproduce:

*  Step 1: Click the quantity selector for the "Sauce Labs Backpack".
*  Step 2: Type "2" in the quantity box and then click the mouse outside of the box


Expected Result: 

*  After Step 1: Cursor should appear in the box and allow user to change quantity.
*  After Step 2: Quantity should change from 1 to 2. Price total should update accordingly.


Actual Result:

*  The quantity box is not editable. The cursor does not appear on click.


## Related Test Case: ST-T15 Increase Product Quantity on Cart page