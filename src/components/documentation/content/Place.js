import React, { Component } from 'react';

export class Place extends Component {
  render () {
    return <div>
      <div>{this.props.place.name}</div>
      <div>{this.props.place.description}</div>
    </div>;
  }
}
