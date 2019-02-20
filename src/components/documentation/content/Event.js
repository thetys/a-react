import React, { Component } from 'react';

export class Event extends Component {
  render () {
    return <div>
      <div>{this.props.event.name}</div>
      <div>{this.props.event.description}</div>
    </div>;
  }
}
