import React, { Component } from 'react';
import { Category } from '../category/Category';

export class RelationList extends Component {
  render () {
    const relations = this.props.relations;
    return <div>
      <div>Relations:</div>
      <ul>
        {relations.places &&
        <li>
          <Category title="Lieux"
                    items={relations.places}
                    type="place"/>
        </li>}
        {relations.characters &&
        <li>
          <Category title="Personnages"
                    items={relations.characters}
                    type="character"/>
        </li>}
        {relations.events &&
        <li>
          <Category title="Evènements"
                    items={relations.events}
                    type="event"/>
        </li>}
      </ul>
    </div>;
  }
}
