import React, { Component } from 'react';
import { Category } from './category/Category';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_CATEGORY_NAMES = gql`
    query getCategoryNames {
        characters {
            id
            name
        }
        places {
            id
            name
        }
        events {
            id
            name
        }
    }
`;

export class DocumentationSidebar extends Component {
  render () {
    return <Query query={GET_CATEGORY_NAMES}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;
        return <div className="fl w-20">
          <Category key="places"
                    title="Lieux"
                    items={data.places}
                    type="place"/>
          <Category key="characters"
                    title="Personnages"
                    items={data.characters}
                    type="character"/>
          <Category key="events"
                    title="Evènements"
                    items={data.events}
                    type="event"/>
        </div>;
      }}
    </Query>;

  }
}
