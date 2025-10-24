# Use Cases

This document provides a detailed description of the user interactions with the system. Each use case represents a specific goal that a user can achieve.

## 1. High-Level Use Case Diagram
[A diagram illustrating the main actors and use cases can be embedded here. For now, a textual description will be used.]

**Actors:**
- **Unregistered User**: A visitor who has not created an account.
- **Registered User**: A user who has an account and is logged in.
- **Administrator**: A user with special privileges to manage the system.

**Main Use Cases:**
- Account Management
- [Core Feature 1, e.g., Browsing Products]
- [Core Feature 2, e.g., Making a Purchase]
- System Administration

---

## 2. Detailed Use Cases

### UC-001: User Registration
- **Actor**: Unregistered User
- **Goal**: To create a new account in the system.
- **Preconditions**: The user must not have an existing account with the provided email address.
- **Main Success Scenario**:
    1. User navigates to the registration page.
    2. User fills in the registration form (e.g., name, email, password).
    3. User submits the form.
    4. The system validates the input data.
    5. The system creates a new user account.
    6. The system logs the user in and redirects them to the dashboard.
- **Extensions (Alternative Flows)**:
    - **4a. Invalid Data**: If the input data is invalid (e.g., email already exists, password is too weak), the system displays an error message and prompts the user to correct the data.

### UC-002: User Login
- **Actor**: Unregistered or Registered User
- **Goal**: To log in to an existing account.
- **Preconditions**: The user must have an existing account.
- **Main Success Scenario**:
    1. User navigates to the login page.
    2. User enters their email and password.
    3. User submits the form.
    4. The system authenticates the user's credentials.
    5. The system creates a new session for the user and redirects them to the dashboard.
- **Extensions (Alternative Flows)**:
    - **4a. Invalid Credentials**: If the credentials are incorrect, the system displays an error message.

### UC-003: [Name of another use case, e.g., Edit Profile]
- **Actor**: Registered User
- **Goal**: [Goal of the use case]
- **Preconditions**: [Any preconditions]
- **Main Success Scenario**:
    1. [Step 1]
    2. [Step 2]
    3. [Step 3]
- **Extensions (Alternative Flows)**:
    - [Alternative flow description]
