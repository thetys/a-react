import React, { Component } from 'react';
import '../styles/App.css';
import { Header } from './Header';
import { Documentation } from './Documentation';

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
