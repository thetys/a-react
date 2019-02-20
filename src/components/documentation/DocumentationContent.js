import React, { Component } from 'react';
import { Place } from './content/Place';
import { Character } from './content/Character';
import { Occurrence } from './content/Occurrence';

export class DocumentationContent extends Component {
  contentComponents = {
    'Place': Place,
    'Character': Character,
    'Occurrence': Occurrence,
  };

  render () {
    const item = this.props.item;
    const ContentComponent = item ? this.contentComponents[item.type] : null;
    return <div className="fl w-80">
      {item && <ContentComponent/>}
    </div>;
  }
}
