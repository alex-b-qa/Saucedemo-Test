Title: [Login] Failed Login Error is Not Fully Visible


ID: ST-12


Severity: Medium


Environment: 

*  Browser: Safari 26.2 
*  MacOS: Tahoe 26.2


Preconditions: 

*  User is on login page (saucedemo.com)
*  User has a valid username (standard_user)
*  User has an invalid password (secret_)


Steps to Reproduce:

*  Step 1: Enter valid username 
*  Step 2: Enter invalid password
*. Step 3: Click "Login"


Expected Result: 

*  After Step 1: Valid username is displayed in username field
*  After Step 2: Invalid password is displayed as masked characters
*  After Step 3: Login is blocked 
*  After Step 3: Failed login error message displays and is fully readable and visible

Actual Result:

*  After Step 1: Valid username is displayed in username field
*  After Step 2: Invalid password is displayed as masked characters
*  After Step 3: Login is blocked. 
*  After Step 3: Failed login error message displays but is not fully visible


## Related Test Case: ST-T17 Attempt login with invalid password and valid username