const chai = require('chai');
const expect = chai.expect;

const Robot = require('./robot');

describe('creating a new robot', () => {
  it('should be given grid boundries', done => {
    const robot = new Robot('10 10');
    expect(robot.grid).to.eq('10 10');
    done();
  });

  it('should be given coordinates', done => {
    const robot = new Robot('10 10', '5 5 N');
    expect(robot.coordinates).to.eq('5 5 N');
    done();
  });

  it('should be given instructions', done => {
    const robot = new Robot('10 10', '5 5 N', 'FFLRF');
    expect(robot.instructions).to.eq('FFLRF');
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
    })
  });
});