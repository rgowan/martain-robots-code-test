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
