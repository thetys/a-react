import React, { Component } from 'react';
import { CategoryItem } from './CategoryItem';

export class Category extends Component {
  render () {
    return <div>
      <div>{this.props.title}</div>
      <ul>
        {this.props.items.map(
          (item) => {
            return <CategoryItem
              key={item.id}
              item={item}
              type={this.props.type}/>;
          },
        )}
      </ul>
    </div>;
  }
}
