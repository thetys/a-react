import React, { Component } from 'react';
import { Place } from './content/Place';
import { Character } from './content/Character';
import { Event } from './content/Event';

export class DocumentationContent extends Component {
  contentComponents = {
    'place': Place,
    'character': Character,
    'event': Event,
  };

  render () {
    const item = this.props.item;
    const ContentComponent = item ? this.contentComponents[item.type] : null;
    const contentProps = item ? {[item.type]: item} : {};
    return <div className="fl w-80">
      {item && <ContentComponent {...contentProps} />}
    </div>;
  }
}
