import React, { Component } from 'react';
import { CategoryItem } from './CategoryItem';

export class Category extends Component {
  render () {
    return <div>
      <div>{this.props.title}</div>
      <ul>
        {this.props.items.map(
          (item) => <CategoryItem key={item.id} name={item.name}/>)}
      </ul>
    </div>;
  }
}
