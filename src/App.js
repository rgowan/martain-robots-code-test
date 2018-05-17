import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Robot from './lib/Robot';

import './scss/style.scss';

class App extends Component {
  state = {
    robots: [
      {
        id: 0,
        coordinates: '',
        instructions: ''
      }
    ],
    grid: '',
    output: []
  }

  handleGridChange = ({ target: { value }}) => {
    this.setState({ grid: value });
  }

  handleRobotChange = ({ target: { name, value, id }}) => {
    const updatedRobot = Object.assign({}, this.state.robots[id], { [name]: value });

    const robots = this.state.robots.map((robot, i) => {
      if(updatedRobot.id === i) {
        robot = updatedRobot;
        return robot;
      }

      return robot;
    });

    this.setState({ robots });
  }

  runInstructions = () => {
    const robots = this.state.robots.map(robot => {
      const { coordinates, instructions } = robot;
      return new Robot(this.state.grid, coordinates, instructions);
    });

    this.setState({ output: Robot.runMultipleRobots(robots)});
  }

  addRobot = () => {
    const robot = {
      id: this.state.robots.length,
      grid: '',
      coordinates: '',
      instructions: ''
    }

    this.setState({ robots: this.state.robots.concat(robot)});
  }

  render() {
    return(
      <main>
        <h1>Martian Robots</h1>

        <form>
          <div>
            <label>Grid (x y)</label>
            <input
              type="text"
              name="grid"
              placeholder="50 50"
              onChange={this.handleGridChange}
            />
          </div>

          <hr />

          { this.state.robots.map((robot, i) => 
            <div key={i} className="robot">
              <div>
                <label>Coordinates (x y d)</label>
                <input
                  type="text"
                  name="coordinates"
                  placeholder="10 10 N"
                  id={i}
                  onChange={this.handleRobotChange}
                />
              </div>
              <div>
                <label>Instructions (F L R)</label>
                <input
                  type="text"
                  name="instructions"
                  placeholder="FFFLLLF"
                  id={i}
                  onChange={this.handleRobotChange}
                />
              </div>
            </div>
          )}
        </form>
        <button onClick={this.addRobot}>Add Robot</button>
        <button onClick={this.runInstructions}>Run Instructions</button>

        { this.state.output.length > 0 &&
          <div>
            <h2>The new coordinates for the robot(s) are;</h2>
            <ul>
              { this.state.output.map((result, i) => 
                <li key={i}>{ result }</li>
              )}
            </ul>
          </div>
        }
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);