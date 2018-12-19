import React, { Component } from 'react';

import SpecialButton from './components/SpecialButton/SpecialButton'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpecialButton disable />
      </div>
    );
  }
}

export default App;
