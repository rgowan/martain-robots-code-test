class Robot {
  constructor(grid, coordinates, instructions) {
    this.grid = grid;
    this.coordinates = coordinates;
    this.instructions = instructions;

    this.lost = false;
  }

  runInstructions() {
    const instructionsArray = this.instructions.split('');

    instructionsArray.forEach(string => {
      if(string === 'F') this.moveRobot();
      if(string === 'L' || string === 'R') this.changeDirection(string);

      if(this.lost) return false;
    });

    return `${this.coordinates}${(this.lost) ? ' LOST' : ''}`;
  }

  moveRobot() {
    let xValue = parseInt(this.coordinates.split(' ')[0]);
    let yValue = parseInt(this.coordinates.split(' ')[1]);
    const currentDirection = this.coordinates.split(' ')[2];

    switch(currentDirection) {
      case 'N':
        var newValue = yValue + 1;
        this.checkRobotBoundries('y', newValue);
        if(!this.lost) yValue = newValue;
        break;
      case 'S':
        var newValue = yValue - 1;
        this.checkRobotBoundries('y', newValue);
        if(!this.lost) yValue = newValue;
        break;
      case 'E':
        var newValue = xValue + 1;
        this.checkRobotBoundries('x', newValue);
        if(!this.lost) xValue = newValue;
        break;
      case 'W':
        var newValue = xValue - 1;
        this.checkRobotBoundries('x', newValue);
        if(!this.lost) xValue = newValue;
        break;
    }

    this.coordinates = `${xValue} ${yValue} ${currentDirection}`;
  }

  checkRobotBoundries(axis, value) {
    const gridXValue = parseInt(this.grid.split(' ')[0]);
    const gridYValue = parseInt(this.grid.split(' ')[1]);

    if(axis === 'x') {
      if(value > gridXValue || value < 0) this.lost = true;
    } else {
      if(value > gridYValue || value < 0) this.lost = true;
    }
  }

  changeDirection(string) {
    let currentDirection = this.coordinates.split(' ')[2];

    switch(currentDirection) {
      case 'N':
        (string === 'L') ? currentDirection = 'W' : currentDirection = 'E';
        break;
      case 'S':
        (string === 'L') ? currentDirection = 'E' : currentDirection = 'W';
        break;
      case 'E':
        (string === 'L') ? currentDirection = 'N' : currentDirection = 'S';
        break;
      case 'W':
        (string === 'L') ? currentDirection = 'S' : currentDirection = 'N';
        break;
    }

    const updatedCoords = this.coordinates.split(' ');
    updatedCoords[2] = currentDirection;
    this.coordinates = updatedCoords.join(' ');
  }
}

module.exports = Robot; 