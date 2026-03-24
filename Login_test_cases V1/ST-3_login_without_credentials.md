# Test: Error displayed when attempting login without credentials

## ID: ST-3

## Priority: High


## Objective
Verify that error is displayed when logging in without credentials

## Precondition
- User is at the login page (saucedemo.com)

## Steps
1. Leave username and password field blank 
2. Click "Login"

## Expected Results
- Login is blocked and site remains on login page
- System displays error showing username is required
- Error message is visible and readable