import React, { Component } from 'react';
import Place from './Place';

class PlaceList extends Component {
  render () {
    const placesToRender = [
      {
        "id": "cjrtbf4d000110634eovibtwm",
        "name": "Centrale Moutte",
        "description": "Sordide prison de Loire-atlantique"
      },
      {
        "id": "cjrtbf4e4001c0634wdyvdzn1",
        "name": "JJ Facility",
        "description": "Centre de détention longue durée personnalisé"
      }
    ];

    return (
      <div>{placesToRender.map(place => <Place key={place.id} place={place} />)}</div>
    )
  }
}

export default PlaceList;
