const chai = require('chai');
const expect = chai.expect;

const Robot = require('./robot');

describe('creating a new robot', () => {

  it('should be given grid boundries', done => {
    const robot = new Robot('10 10');
    expect(robot.grid).to.eq('10 10');
    done();
  });
  
});
