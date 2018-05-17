# Martian Robots Code Test

## Overview

I am using Node, Mocha and Chai plus nyc for test coverage. I took the route of focusing on testing, error handling and refactoring rather than building a user interface. This could have been done by importing the Robot class into a react component with a template consisting of a form to take the input values and somewhere to render the output. There are 23 passing tests with 100% coverage.

This code challenge was really enjoyable. I spent around 3 hours on my solution.

I've kept my pseudocode inside the `index.js` so you can see how I broke the problem down :)

## Instructions

```
// install dependencies
yarn install

// run tests
yarn test

// creating a robot instance
const robot = new Robot(grid, coordinates, instructions);

// run instructions for robot instance
robot.runInstructions();

// running multiple robots;
const arrayOfRobots = [
  new Robot(grid, coordinates, instructions),
  new Robot(grid, coordinates, instructions)
];

Robot.runMultipleRobots(arrayOfRobots);
```