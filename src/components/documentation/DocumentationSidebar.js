import React, { Component } from 'react';
import { Category } from './category/Category';

export class DocumentationSidebar extends Component {
  render () {
    return <div className="fl w-20">
      <Category/>
      <Category/>
      <Category/>
      <Category/>
    </div>;
  }
}
