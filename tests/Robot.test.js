const chai = require('chai');
const expect = chai.expect;

const Robot = require('../src/lib/Robot');

describe('creating a new robot', () => {
  it('should be given grid boundries', done => {
    const robot = new Robot('10 10', '5 5 N', '');
    expect(robot.grid).to.eq('10 10');
    done();
  });

  it('should be given coordinates', done => {
    const robot = new Robot('10 10', '5 5 N', '');
    expect(robot.coordinates).to.eq('5 5 N');
    done();
  });

  it('should be given instructions', done => {
    const robot = new Robot('10 10', '5 5 N', 'FFLRF');
    expect(robot.instructions).to.eq('FFLRF');
    done();
  });

  it('should be given default values if needed', done => {
    const robot = new Robot();

    expect(robot.grid).to.eq('50 50');
    expect(robot.coordinates).to.eq('0 0 N');
    expect(robot.instructions).to.eq('');
    done();
  });

  it('should throw an error if instructions string is longer than 100 characters', done => {
    const constructor = () => new Robot('50 50', '0 0 N', 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

    expect(constructor).to.throw(Error, 'Instructions must be less than 100 characters');
    done();
  });

  it('should throw an error if grid values are over 50', done => {
    const constructor = () => new Robot('51 51', '0 0 N', 'F');

    expect(constructor).to.throw(Error, 'Grid values must be less than 50');
    done();
  });
});

describe('moving a robot', () => {
  describe('moving robot with "F" instruction', () => {
    it('should move robot y+1 when current direction is "N"', done => {
      const robot = new Robot('10 10', '5 5 N', 'F');
      expect(robot.runInstructions()).to.eq('5 6 N');
      done();
    });

    it('should move robot y-1 when current direction is "S"', done => {
      const robot = new Robot('10 10', '5 5 S', 'F');
      expect(robot.runInstructions()).to.eq('5 4 S');
      done();
    });

    it('should move robot x+1 when current direction is "E"', done => {
      const robot = new Robot('10 10', '5 5 E', 'F');
      expect(robot.runInstructions()).to.eq('6 5 E');
      done();
    });

    it('should move robot x-1 when current direction is "W"', done => {
      const robot = new Robot('10 10', '5 5 W', 'F');
      expect(robot.runInstructions()).to.eq('4 5 W');
      done();
    });
  });

  describe('change robot direction with "L" instruction', () => {
    it('should change current direction from "N" to "W"', done => {
      const robot = new Robot('10 10', '5 5 N', 'L');
      expect(robot.runInstructions()).to.eq('5 5 W');
      done();
    });

    it('should change current direction from "W" to "S"', done => {
      const robot = new Robot('10 10', '5 5 W', 'L');
      expect(robot.runInstructions()).to.eq('5 5 S');
      done();
    });

    it('should change current direction from "S" to "E"', done => {
      const robot = new Robot('10 10', '5 5 S', 'L');
      expect(robot.runInstructions()).to.eq('5 5 E');
      done();
    });

    it('should change current direction from "E" to "N"', done => {
      const robot = new Robot('10 10', '5 5 E', 'L');
      expect(robot.runInstructions()).to.eq('5 5 N');
      done();
    });
  });

  describe('change robot direction with "R" instruction', () => {
    it('should change current direction from "N" to "E"', done => {
      const robot = new Robot('10 10', '5 5 N', 'R');
      expect(robot.runInstructions()).to.eq('5 5 E');
      done();
    });

    it('should change current direction from "E" to "S"', done => {
      const robot = new Robot('10 10', '5 5 E', 'R');
      expect(robot.runInstructions()).to.eq('5 5 S');
      done();
    });

    it('should change current direction from "S" to "W"', done => {
      const robot = new Robot('10 10', '5 5 S', 'R');
      expect(robot.runInstructions()).to.eq('5 5 W');
      done();
    });

    it('should change current direction from "W" to "N"', done => {
      const robot = new Robot('10 10', '5 5 W', 'R');
      expect(robot.runInstructions()).to.eq('5 5 N');
      done();
    });
  });
});

describe('robot should keep within grid boundries', () => {
  describe('y axis', () => {
    it('should return last coordinates plus "LOST" if robot moves above grid max', done => {
      const robot = new Robot('10 10', '5 9 N', 'FF');
      expect(robot.runInstructions()).to.eq('5 10 N LOST');
      done();
    });
  
    it('should return last coordinates plus "LOST" if robot moves below 0', done => {
      const robot = new Robot('10 10', '5 1 S', 'FF');
      expect(robot.runInstructions()).to.eq('5 0 S LOST');
      done();
    });
  });

  describe('x axis', () => {
    it('should return last coordinates plus "LOST" if robot moves above grid max', done => {
      const robot = new Robot('10 10', '9 5 E', 'FF');
      expect(robot.runInstructions()).to.eq('10 5 E LOST');
      done();
    });
  
    it('should return last coordinates plus "LOST" if robot moves below 0', done => {
      const robot = new Robot('10 10', '1 5 W', 'FF');
      expect(robot.runInstructions()).to.eq('0 5 W LOST');
      done();
    });
  });
});

describe('multiple robots', () => {
  it('should handle running multiple robots', done => {
    const robotArray = [
      new Robot('5 5', '2 2 N', 'FF'),
      new Robot('10 10', '4 6 E', 'FFLFFRRFF'),
      new Robot('10 10', '8 8 N', 'FFF')
    ];

    expect(Robot.runMultipleRobots(robotArray)).to.deep.equal(['2 4 N', '6 6 S', '8 10 N LOST']);

    done();
  });
});