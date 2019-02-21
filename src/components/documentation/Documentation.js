import React, { Component } from 'react';
import { DocumentationContent } from './DocumentationContent';
import { DocumentationSidebar } from './DocumentationSidebar';

export class Documentation extends Component {
  constructor (props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.state = {
      selected: null,
    };
  }

  handleItemChange (item) {
    this.setState({ selected: item });
  }

  render () {
    return <div className="w100">
      <DocumentationSidebar onItemSelected={this.handleItemChange}/>
      <DocumentationContent item={this.state.selected}/>
    </div>;
  }
}
