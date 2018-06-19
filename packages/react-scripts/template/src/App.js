import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/about">
              <button>Go to About</button>
            </Link>
            <Link exact="true" to="/teste">
              <button>Go to Home</button>
            </Link>
          </header>
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);
