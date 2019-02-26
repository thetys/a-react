import React, { Component } from 'react';
import { Place } from './content/Place';
import { Character } from './content/Character';
import { Event } from './content/Event';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const QUERIES = {
  character: gql`
      query Character($id: ID!){
          character(id: $id) {
              id
              name
              description
          }
      }
  `,
  place: gql`
      query Place($id: ID!){
          place(id: $id) {
              id
              name
              description
          }
      }
  `,
  event: gql`
      query Event($id: ID!){
          event(id: $id) {
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
          }
      }
  `,
};

const GET_SELECTED_ITEM = gql`
    {
        selectedItem @client {
            type
            id
        }
    }
`;

export class DocumentationContent extends Component {
  contentComponents = {
    'place': Place,
    'character': Character,
    'event': Event,
  };

  render () {
    return <div className="fl w-80">
      <Query query={GET_SELECTED_ITEM}>
        {({ data: { selectedItem } }) => {
          if (!selectedItem) return null;
          const ContentComponent = this.contentComponents[selectedItem.type];
          return <Query query={QUERIES[selectedItem.type]}
                 variables={{ id: selectedItem.id }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Fetching</div>;
              if (error) return <div>Error</div>;
              const contentProps = { [selectedItem.type]: data[selectedItem.type] };
              return <ContentComponent {...contentProps} />;
            }}
          </Query>
        }}
      </Query>
    </div>;
  }
}
