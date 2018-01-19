import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Component/Friends/Friend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List of Friends</h1>
        <Friends />
      </div>
    );
  }
}

export default App;
