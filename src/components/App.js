import React, { Component } from 'react';
import { Header } from './Header';
import { Documentation } from './documentation/Documentation';

class App extends Component {
  render() {
    return (
      <div className="debug">
        <Header/>
        <Documentation/>
      </div>
    );
  }
}

export default App;
