import React, { Component } from 'react';
import { CategoryItem } from './CategoryItem';

export class Category extends Component {
  render () {
    return <div>
      <div>Category title</div>
      <ul>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
      </ul>
    </div>;
  }
}
