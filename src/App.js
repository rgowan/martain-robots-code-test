import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

class App extends Component {
  state = {
    robots: [
      {
        id: 0,
        grid: '',
        coordinates: '',
        instructions: ''
      }
    ]
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
                />
              </div>
              <div>
                <label>Coordinates (x y d)</label>
                <input
                  type="text"
                  name="coordinates"
                  placeholder="10 10 N"
                  id={i}
                />
              </div>
            </div>
          )}
        </form>
        <button>Add Robot</button>
        <button>Run Instructions</button>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);