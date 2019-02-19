import React, { Component } from 'react';
import Place from './Place';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const PLACES_QUERY = gql`
    {
        places {
            id
            name
        }
    }
`;

class PlaceList extends Component {
  render () {
    return (
      <Query query={PLACES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          const placesToRender = data.places;

          return (
            <div>
              {placesToRender.map(
                place => <Place key={place.id} place={place}/>)}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PlaceList;
