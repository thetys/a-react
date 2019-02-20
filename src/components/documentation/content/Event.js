import React, { Component } from 'react';
import Moment from 'react-moment';

export class Event extends Component {
  render () {
    const event = this.props.event;
    const format = "DD/MM/YYYY";
    return <div>
      <div>{event.name}</div>
      {
        event.endDate ?
          <div>Du <Moment date={event.startDate} format={format} /> au <Moment date={event.endDate} format={format}/></div> :
          <div>Le <Moment date={event.startDate} format={format} /></div>
      }
      <div>{event.description}</div>
    </div>;
  }
}
