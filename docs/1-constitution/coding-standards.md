# Coding Standards

This document outlines the coding standards and conventions to be followed throughout the project. Adhering to these standards ensures code consistency, readability, and maintainability.

## 1. Language Specific Conventions

### 1.1. JavaScript/TypeScript
- **Linter**: We will use ESLint with a predefined configuration (e.g., Airbnb style guide, with modifications).
- **Formatter**: Prettier will be used for automatic code formatting to ensure a consistent style.
- **Naming Conventions**:
    - `camelCase` for variables and functions.
    - `PascalCase` for classes and components.
    - `UPPER_CASE_SNAKE_CASE` for constants.
- **Modules**: Use ES6 modules (`import`/`export`).

### 1.2. CSS/Styling
- **Methodology**: We will use CSS-in-JS or a similar methodology provided by our UI framework.
- **Class Naming**: Follow a consistent naming convention (e.g., BEM) if writing custom CSS.
- **Units**: Use `rem` for font sizes and `px` for borders or other fixed-size elements.

## 2. Component Structure (React/Next.js)
- **File Naming**: Components should be named in `PascalCase` (e.g., `UserProfile.tsx`).
- **Directory Structure**: Each component should reside in its own folder, containing the component file, styles, and tests.
    ```
    /components
      /UserProfile
        - index.tsx
        - UserProfile.module.css
        - UserProfile.test.tsx
    ```
- **Props**: Use TypeScript interfaces to define component props for type safety.

## 3. General Best Practices
- **Comments**: Write meaningful comments to explain complex logic, but avoid commenting on obvious code.
- **DRY (Don't Repeat Yourself)**: Avoid duplicating code by creating reusable functions and components.
- **KISS (Keep It Simple, Stupid)**: Write simple, straightforward code. Avoid premature optimization.
