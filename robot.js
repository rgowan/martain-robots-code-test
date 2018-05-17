class Robot {
  constructor(grid, coordinates, instructions) {
    this.grid = grid;
    this.coordinates = coordinates;
    this.instructions = instructions;
  }

  runInstructions() {
    const instructionsArray = this.instructions.split('');

    instructionsArray.forEach(string => {
      if(string === 'F') this.moveRobot();
    });

    return this.coordinates;
  }

  moveRobot() {
    let xValue = parseInt(this.coordinates.split(' ')[0]);
    let yValue = parseInt(this.coordinates.split(' ')[1]);
    const currentDirection = this.coordinates.split(' ')[2];

    switch(currentDirection) {
      case 'N':
        yValue +=1;
        break;
      case 'S':
        yValue -=1;
        break;
      case 'E':
        xValue +=1;
        break;
      case 'W':
        xValue -=1;
        break;
    }

    this.coordinates = `${xValue} ${yValue} ${currentDirection}`;
  }
}

module.exports = Robot; 