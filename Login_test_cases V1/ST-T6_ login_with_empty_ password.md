# Test: Attempt login with only username and empty password

## ID: ST-T6

## Priority: High

## Objective
Check if system shows validation error for required password field

## Precondition
- User is on the login page (saucedemo.com) 
- Username and password fields are blank

## Steps
1. Enter valid username (standard_user)
2. Leave the password field blank
3. Click login

## Expected Results
- Login is blocked and site remains on login page
- ​Validation error ​appears and informs user ​of missing ​password field
- Error message is visible and readable
