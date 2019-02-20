import React, { Component } from 'react';
import { Category } from './category/Category';

export class DocumentationSidebar extends Component {
  render () {
    return <div className="fl w-20">
      <Category key="places"
                title="Lieux"
                type="Place"
                items={this.props.categories.places}
                onItemSelected={this.props.onItemSelected}/>
      <Category key="characters"
                title="Personnages"
                type="Character"
                items={this.props.categories.characters}
                onItemSelected={this.props.onItemSelected}/>
      <Category key="occurrences"
                title="Evènements"
                type="Occurrence"
                items={this.props.categories.occurrences}
                onItemSelected={this.props.onItemSelected}/>
    </div>;
  }
}
