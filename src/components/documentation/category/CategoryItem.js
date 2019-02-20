import React, { Component } from 'react';

export class CategoryItem extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onItemSelected({
      ...this.props.item,
      type: this.props.type,
    });
  }

  render () {
    return <li onClick={this.handleClick}>{this.props.item.name}</li>;
  }
}
