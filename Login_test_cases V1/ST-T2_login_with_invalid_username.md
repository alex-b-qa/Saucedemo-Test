# Test: Validate logging in with invalid username

## ID: ST-T2

## Priority: High

## Objective
Test error handling when logging in with invalid username

## Precondition
- User is on login page (saucedemo.com)
- Valid user account exists

## Steps
1. Enter invalid username into username field (new_user)
2. Enter valid password in password field (secret_sauce)
3. Click "login"

## Expected Results
- Username shows in username field
- Masked password shows in password field
- Validation error shows username or password is incorrect
- Error is visible and readable 
