import React, { Component } from 'react';

export class CategoryItem extends Component {
  render () {
    return <li>{this.props.name}</li>;
  }
}
