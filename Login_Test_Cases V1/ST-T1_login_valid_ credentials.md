# Test: Login with valid credentials

## ID: ST-T1

## Priority: Critical


## Objective
Verify that known good login credentials are working

## Precondition
- Valid user account exists (standard_user)
- User is on login page (saucedemo.com)

## Steps
1. Enter valid username in the username field (standard_user)
2. Enter valid password in the password field (secret_sauce)
3. Click ​"Login"

## Expected Results
- Username is displayed in username field
- Password is displayed in password field as masked characters
- Login is successful
- Redirects to PLP (inventory.html)