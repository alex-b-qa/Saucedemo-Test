# Sauce Demo – QA Testing Portfolio

## Project Overview
This project documents end-to-end manual and automated testing performed on the Sauce Demo web application, a sample e-commerce site.

- **Application Under Test:** Sauce Demo  
- **URL:** https://www.saucedemo.com  
- **Testing Types:** Manual Testing, Automated Testing (Cypress)  
- **Purpose:** Demonstrate practical QA skills including test case design, execution, defect tracking, and basic automation  

---

## Scope of Testing

### In Scope
- User authentication (valid and invalid login)
- Product inventory page
- Shopping cart functionality
- Checkout process

### Out of Scope
- Performance testing
- Security testing
- API testing
- Cross-browser testing

---

## Test Artifacts, Automation Strategy, Limitations, and Future Work

### Manual Testing
- Created 20 manual test cases covering login, inventory, cart, and checkout flows
- Included positive, negative, and edge-case scenarios
- Executed test cases and recorded expected vs actual results
- Managed test cases and test execution using Jira and Zephyr Scale
- Linked defects to related test cases for traceability  

**📁 Location:**  
`/manual-testing/`

### Defect Tracking
- Logged defects with:
  - Clear steps to reproduce
  - Expected vs actual behavior
  - Severity and priority
- Tracked and managed bugs in Jira
- Linked defects to corresponding test cases in Zephyr Scale  

**📁 Location:**  
`/bug-reports/`

### Automated Testing (Cypress)
- Implemented end-to-end automated tests using Cypress
- Automated high-value regression scenarios:
  - Valid login
  - Invalid login
  - Cart and checkout flow
- Automation focused on repeatable, business-critical functionality  

**📁 Location:**  
`/cypress-e2e/`

### Automation Strategy
Manual test cases were reviewed and prioritized based on:
- Business impact
- Regression risk
- Test repeatability  

Selected test cases were then automated to demonstrate:
- Basic Cypress usage
- Reliable selectors
- Clear test intent

### Known Limitations / Observations
- Error messaging on login could be improved for clarity
- No email confirmation after checkout (expected for real-world applications)
- Test case **ST-T7** has a UI bug in the error message  
  - Identified during manual testing  
  - Not covered by automation

### Future Testing Ideas
If testing were to continue, next steps would include:
- Expanded regression automation
- Expanded manual testing
- Additional edge cases for login and checkout
- Cross-browser testing
- Exploratory testing

---

## Tools & Technologies
- **Test Management:** Jira, Zephyr Scale
- **Automation Framework:** Cypress
- **Language:** JavaScript
- **Version Control:** GitHub
- **Browser:** Chrome

---

# How to Run Automated Tests

## Cypress Test Setup – Sauce Demo

This project contains end-to-end tests using **Cypress** for the Sauce Demo application.

---

## Prerequisites

Before running the tests, ensure the following are installed:

- Node.js (v16 or later recommended)
- npm (included with Node.js)
- A supported browser - Chrome, Edge, (The Electron browser is included after you run npm install in step 4)


---

## Repository Setup 

### 1. Download the Repository

1. Go to the GitHub repository URL in your browser:
   https://github.com/alex-b-qa/Saucedemo-Test/

2. Click the green **Code** button

3. Select **Download ZIP**

4. Extract the ZIP file to a location on your computer

---

### 2. Open the Project Folder

After extracting the ZIP, you will have a folder:

saucedemotest/

This will be the project folder.

### 3. Open Terminal in the Project Folder

All commands must be run inside the extracted saucedemotest folder.

You can open a terminal using:
- Mac Terminal: cd path/to/saucedemotest
- Windows PowerShell / Command Prompt: cd path\to\saucedemotest

---

### 4. Install Dependencies

In the Terminal / Command Prompt, run this command inside the saucedemotest folder:

npm install

This will:
- Read package.json
- Install Cypress and all required dependencies
- Create the node_modules/ folder

## Note on npm warnings

After running `npm install`, you may see vulnerability warnings. These are common in Cypress projects and are related to dependencies, not the test code.

They do not prevent the tests from running.

---

## Running Cypress Tests

### Option 1: Open Cypress Test Runner (UI Mode)

Run this command inside the project folder terminal:

npx cypress open

Steps after running:
1. Cypress Test Runner opens
2. Select **E2E Testing**
3. Choose a browser
4. Click 'Start E2E Testing'
5. Click a test file inside cypress/e2e
6. Tests run interactively in the browser
7. Click 'Specs' in the far left menu to go back to the list of tests


---

### Option 2: Run Tests in Headless Mode

Run this command in the same terminal:

npx cypress run

This runs all tests in the terminal without opening the Cypress UI.



## About This Project

- This project was created as an independent QA portfolio project to demonstrate:
- Manual test case design and execution
- Defect reporting and traceability
- Automation using Cypress
- Clear QA documentation and organization
