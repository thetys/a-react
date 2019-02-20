import React, { Component } from 'react';
import { Category } from './category/Category';

export class DocumentationSidebar extends Component {
  render () {
    return <div className="fl w-20">
        <Category key="places" title="Lieux" items={this.props.categories.places} />
        <Category key="characters" title="Personnages" items={this.props.categories.characters} />
        <Category key="occurrences" title="Evènements" items={this.props.categories.occurrences} />
    </div>;
  }
}
