import React, { Component } from 'react';

export class Character extends Component {
  render () {
    return <div>
      <div>{this.props.character.name}</div>
      <div>{this.props.character.description}</div>
    </div>;
  }
}
