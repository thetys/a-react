import React, { Component } from 'react';
import { Place } from './content/Place';
import { Character } from './content/Character';
import { Event } from './content/Event';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const SEARCH_CONTENT = gql`
    query Content($id: ID!){
        search(id: $id) {
            ... on Character {
                id
                name
                description
                __typename
            }
            ... on Event {
                id
                name
                description
                startDate
                endDate
                places {
                    id
                    name
                }
                characters {
                    id
                    name
                }
                __typename
            }
            ... on Place {
                id
                name
                description
                __typename
            }
        }
    }
`;

const GET_SELECTED_ITEM = gql`
    {
        selectedItem @client
    }
`;

export class DocumentationContent extends Component {
  contentComponents = {
    'Place': Place,
    'Character': Character,
    'Event': Event,
  };

  render () {
    return <div className="fl w-80">
      <Query query={GET_SELECTED_ITEM}>
        {({ data: { selectedItem } }) => {
          if (!selectedItem) return null;
          return <Query query={SEARCH_CONTENT} variables={{ id: selectedItem }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>;
              if (error) return <div>Error</div>;
              if (!data.search) return null;
              const ContentComponent = this.contentComponents[data.search.__typename];
              const contentProps = { [data.search.__typename.toLowerCase()]: data.search };
              return <ContentComponent {...contentProps} />;
            }}
          </Query>;
        }}
      </Query>
    </div>;
  }
}
