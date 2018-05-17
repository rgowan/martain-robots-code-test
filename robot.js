class Robot {
  constructor(grid, coordinates, instructions) {
    this.grid = grid;
    this.coordinates = coordinates;
    this.instructions = instructions;

    this.lost = false;
    this.xValue = parseInt(this.coordinates.split(' ')[0]);
    this.yValue = parseInt(this.coordinates.split(' ')[1]);
    this.currentDirection = this.coordinates.split(' ')[2];
    this.gridX = parseInt(this.grid.split(' ')[0]);
    this.gridY = parseInt(this.grid.split(' ')[1]);
  }

  runInstructions() {
    const instructionsArray = this.instructions.split('');

    instructionsArray.forEach(string => {
      (string === 'L' || string === 'R') ? this.changeDirection(string) : this.moveRobot();
      if(this.lost) return false;
    });

    return `${this.coordinates}${(this.lost) ? ' LOST' : ''}`;
  }

  moveRobot() {
    let newValue = null;

    switch(this.currentDirection) {
      case 'N':
        newValue = this.yValue + 1;
        this.checkBoundries('y', newValue);
        if(!this.lost) this.yValue = newValue;
        break;
      case 'S':
        newValue = this.yValue - 1;
        this.checkBoundries('y', newValue);
        if(!this.lost) this.yValue = newValue;
        break;
      case 'E':
        newValue = this.xValue + 1;
        this.checkBoundries('x', newValue);
        if(!this.lost) this.xValue = newValue;
        break;
      case 'W':
        newValue = this.xValue - 1;
        this.checkBoundries('x', newValue);
        if(!this.lost) this.xValue = newValue;
        break;
    }
    
    this.updateCoordinates();
  }

  checkBoundries(axis, value) {
    const gridValue = (axis === 'x') ? this.gridX : this.gridY;
    if(value > gridValue || value < 0) this.lost = true;
  }

  changeDirection(string) {
    switch(this.currentDirection) {
      case 'N':
        (string === 'L') ? this.currentDirection = 'W' : this.currentDirection = 'E';
        break;
      case 'S':
        (string === 'L') ? this.currentDirection = 'E' : this.currentDirection = 'W';
        break;
      case 'E':
        (string === 'L') ? this.currentDirection = 'N' : this.currentDirection = 'S';
        break;
      case 'W':
        (string === 'L') ? this.currentDirection = 'S' : this.currentDirection = 'N';
        break;
    }

    this.updateCoordinates();
  }

  updateCoordinates() {
    this.coordinates = `${this.xValue} ${this.yValue} ${this.currentDirection}`;
  }
}

module.exports = Robot; 