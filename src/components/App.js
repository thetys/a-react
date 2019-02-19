import React, { Component } from 'react';
import PlaceList from './PlaceList';
import '../styles/App.css';
import CreatePlace from './CreatePlace';
import Header from './Header';
import { Route, Switch } from 'react-router';

class App extends Component {
  render () {
    return (
      <div className="center w85">
        <Header/>
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={PlaceList}/>
            <Route exact path="/create" component={CreatePlace}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
