// Each robot created must be given 3 pieces of data

// 1) a value to define the grid boundries of the robot (x y)
// min 0 / max 50

//      x  y
// e.g '10 10'

// 2) defines where the robot is currently within the grid using same axis values and also includes direction (x y d)
// possible directions - N S E W
// e.g '5 5 N'



// 3) defining instructions to move the robot
// possible directions - F L R
// max 100 characters
// e.g 'FFLFFRFF'

// F - depending on direction, robot axis values should move +1 / -1
// N - y+1
// S - y-1
// E - x+1
// W - x-1

// L - robot will turn left 90 degrees but stay on same coords
// R - robot will turn right 90 degrees but stay on same coords

// e.g ('10 10', '5 5 N', 'FF') -> '5 7 N'

// if robot moves outside of grid boundries, 'LOST should be added to the output at the last possible move'

// e.g ('5 5', '4 4 N', 'FF') -> '4 5 N LOST'

// --------------------------------------------------

// create robot instance
// move robot instance
// add lost functionality


const Robot = require('./robot');

const robot = new Robot('10 10', '5 5 W', 'FF');

console.log(robot.runInstructions());