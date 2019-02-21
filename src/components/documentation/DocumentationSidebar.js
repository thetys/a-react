import React, { Component } from 'react';
import { Category } from './category/Category';

export class DocumentationSidebar extends Component {
  constructor (props) {
    super(props);
    this.handlePlaceSelection = this.handlePlaceSelection.bind(this);
    this.handleCharacterSelection = this.handleCharacterSelection.bind(this);
    this.handleEventSelection = this.handleEventSelection.bind(this);
  }

  handlePlaceSelection(item) {
    this.props.onItemSelected({...item, type: 'place'});
  }

  handleCharacterSelection(item) {
    this.props.onItemSelected({...item, type: 'character'});
  }

  handleEventSelection(item) {
    this.props.onItemSelected({...item, type: 'event'});
  }

  render () {
    return <div className="fl w-20">
      <Category key="places"
                title="Lieux"
                items={this.props.categories.places}
                onItemSelected={this.handlePlaceSelection}/>
      <Category key="characters"
                title="Personnages"
                items={this.props.categories.characters}
                onItemSelected={this.handleCharacterSelection}/>
      <Category key="events"
                title="Evènements"
                items={this.props.categories.events}
                onItemSelected={this.handleEventSelection}/>
    </div>;
  }
}
