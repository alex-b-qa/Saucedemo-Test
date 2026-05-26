# Sauce Demo – QA Testing Portfolio

## Project Overview
This project documents end-to-end manual and automated testing performed on the Sauce Demo web application, a sample e-commerce site.

* **Application Under Test:** Sauce Demo
* **URL:** https://www.saucedemo.com
* **Testing Types:** Manual Testing, Automated Testing (Cypress)
* **Purpose:** Demonstrate practical QA skills including test case design, execution, defect tracking, and basic automation

---

## Scope of Testing
The following features were tested:

* User authentication (valid and invalid login)
* Product inventory page
* Shopping cart functionality
* Checkout process

**Out of Scope:**
* Performance testing
* Security testing
* API testing
* Cross-browser testing

---

## Test Artifacts

### Manual Testing
* Created 20 manual test cases covering login, inventory, cart, and checkout flows
* Included positive, negative, and edge-case scenarios
* Executed test cases and recorded expected vs actual results
* Managed test cases and test execution using Jira and Zephyr Scale
* Linked defects to related test cases for traceability

📁 **Location:** `/manual-testing/`

### Defect Tracking
* Logged defects with:
  * Clear steps to reproduce
  * Expected vs actual behavior
  * Severity and priority
* Tracked and managed bugs in Jira
* Linked defects to corresponding test cases in Zephyr Scale

📁 **Location:** `/bug-reports/`

### Automated Testing (Cypress)
* Implemented end-to-end automated tests using Cypress
* Automated high-value regression scenarios:
  * Valid login
  * Invalid login
  * Cart and checkout flow
* Automation focused on repeatable, business-critical functionality

📁 **Location:** `/cypress/e2e/`

---

## Automation Strategy
Manual test cases were reviewed and prioritized based on:

* Business impact
* Regression risk
* Test repeatability

Selected test cases were then automated to demonstrate:
* Basic Cypress usage
* Reliable selectors
* Clear test intent

---

## Tools & Technologies
* **Test Management:** Jira, Zephyr Scale
* **Automation Framework:** Cypress
* **Language:** JavaScript
* **Version Control:** GitHub
* **Browser:** Chrome

---

## How to Run Automated Tests

1. Clone the repository
2. Install dependencies:
```bash
   npm install
