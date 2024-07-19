Test Driven Development (TDD) with JavaScript

## String Calculator TDD Kata

A simple String Calculator to demonstrate Test-Driven Development (TDD) practices using QUnit for testing. This calculator can handle various delimiters, including commas, new lines, and delimiters specified in the string.

## Features

- Adds numbers provided in a string format.
- Supports multiple delimiters including commas, new lines, and delimiters.
- Handles negative numbers by throwing an exception with a list of all negative numbers encountered.

## QUnit

- QUnit is a powerful, easy-to-use JavaScript testing framework that was originally developed by the jQuery team. It is used for testing any JavaScript code, from simple functions to complex applications, and it supports both synchronous and asynchronous testing.

- **Install QUnit**

  ```sh
  npm install --save-dev qunit
  ```

- **package.json**

      ````sh
      "scripts": {
        "test": "qunit"
        }

  ```


  ```

## Installation

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/HrushabhPatade/TDD_ADD.git
   cd TDD_ADD
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Run Tests**:
   ```sh
   npm test
   ```

## Usage

### Add Function

The `add` function takes a string of numbers and returns their sum. The function handles different delimiters and throws an exception for negative numbers.

## License

This project is licensed under the MIT License.
