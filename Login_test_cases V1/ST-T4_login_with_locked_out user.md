# Test: Validate logging in with a locked out user

## ID: ST-T4

## Priority: High

## Objective
Verify that login is blocked for a locked out user

## Precondition
- User is on login page (saucedemo.com)
- The user account is locked out

## Steps
1. Enter valid username (locked_out_user)
2. Enter valid password (secret_sauce)
3. Click "Login"

## Expected Results
- Username is displayed in username field
- Password is shown as masked characters
- Login is blocked
- Error displays that user account is locked out
- Error is visible and readable
