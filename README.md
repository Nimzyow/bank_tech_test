# Makers Bank Tech Test challenge
This tech test allows us the opportunity to create a bank account that allows you to withdraw, deposit and print your bank statement.

[![money](https://cdn.sovereignman.com/wp-content/uploads/2016/06/cash-piles.png)]

## Table of content

- [Installation](#installation)
- [Testing](#testing)
- [Running the application](#running-the-application)
- [Tech stack](#tech-stack)

## Installation

Follow these steps to install required dependencies:

1) In the root of the project, type the following in your terminal:

```
$ npm install
```

That's it!

## Testing

1) In the root of the project, type the following in your terminal:

```
$ npm test
```
You will see the test run in the command line.

If you want to see test coverage, navigate to navigate to coverage/index.html and run the file in the chrome browser. You should see test coverage and 100% passing tests. 

![test coverage](https://github.com/Nimzyow/bank_tech_test/assets/test-coverage.png)

## Running the application

To run the application, simply go to the root and open the index.html file in the Chrome browser.

Open the JavaScript console in Chrome browser and follow the instructions on the page for how to use this application.

![application being run](https://github.com/Nimzyow/bank_tech_test/assets/app-overview.png)

## Planning

A lot of time was spent on the planning of the application and the name of each function so that it is as simple and concice as it needs to be. Doing this helped foresee the vast majority of my problems ahead of time and enabled an effective and smooth TDD process.

An example of a problem I foresaw with planning ahead is the issue of single responsibility and what had to be extracted into its own class as the following picture demonstrates:

![planning picture](https://github.com/Nimzyow/bank_tech_test/assets/bank_tech_test_plan.png)

This enabled me to see what exactly had to be mocked and stubbed to allow for unit testing across the board.

## Tech stack

- JavaScript
- Karma
- Jasmine
- Istanbul

