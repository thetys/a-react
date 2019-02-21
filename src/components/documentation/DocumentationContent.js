import React, { Component } from 'react';
import { Place } from './content/Place';
import { Character } from './content/Character';
import { Event } from './content/Event';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { getSelectedDocumentationContent } from '../../store/selectors';

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

class DocumentationContent extends Component {
  contentComponents = {
    'place': Place,
    'character': Character,
    'event': Event,
  };

  render () {
    const item = this.props.selectedContent;
    const ContentComponent = item ? this.contentComponents[item.type] : null;
    return <div className="fl w-80">
      {item &&
      <Query query={QUERIES[item.type]}
             variables={{ id: item.id }}
             skip={!item}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;
          const contentProps = item ? { [item.type]: data[item.type] } : {};
          return <ContentComponent {...contentProps} />;
        }}
      </Query>}
    </div>;
  }
}

export default connect(
  state => ({ selectedContent: getSelectedDocumentationContent(state) }))(
  DocumentationContent);
