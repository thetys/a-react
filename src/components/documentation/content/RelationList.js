import React, { Component } from 'react';
import { Category } from '../category/Category';

export class RelationList extends Component {
  constructor (props) {
    super(props);
    this.handlePlaceSelection = this.handlePlaceSelection.bind(this);
    this.handleCharacterSelection = this.handleCharacterSelection.bind(this);
    this.handleEventSelection = this.handleEventSelection.bind(this);
  }

  handlePlaceSelection (itemId) {
    this.props.onRelationSelected('place', itemId);
  }

  handleCharacterSelection (itemId) {
    this.props.onRelationSelected('character', itemId);
  }

  handleEventSelection (itemId) {
    this.props.onRelationSelected('event', itemId);
  }

  render () {
    const relations = this.props.relations;
    return <div>
      <div>Relations:</div>
      <ul>
        {relations.places &&
        <li><Category title="Lieux"
                      items={relations.places}
                      onItemSelected={this.handlePlaceSelection}/></li>}
        {relations.characters &&
        <li><Category title="Personnages"
                      items={relations.characters}
                      onItemSelected={this.handleCharacterSelection}/></li>}
        {relations.events &&
        <li><Category title="Evènements"
                      items={relations.events}
                      onItemSelected={this.handleEventSelection}/></li>}
      </ul>
    </div>;
  }
}
