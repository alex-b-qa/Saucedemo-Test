# Test: Attempt login with invalid password and valid username

## Objective
Test whether or not user can login with valid username and invalid password

## Precondition
- User is on login page (saucedemo.com)
- Username and password field are blank

## Steps
1. Enter a valid username (standard_user)
2. Enter an invalid password (wrong_pw)
3. Click login

## Expected Results
- Login is blocked and system remains on login page
- Validation error displays username or password incorrect
- Validation error is fully visible and readable


## Priority
High
