import React, { Component } from 'react';
import { Category } from './category/Category';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_CATEGORIES = gql`
    query {
        characters {
            id
            name
            description
        }
        places {
            id
            name
            description
        }
        events {
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
`;

export class DocumentationSidebar extends Component {
  constructor (props) {
    super(props);
    this.handlePlaceSelection = this.handlePlaceSelection.bind(this);
    this.handleCharacterSelection = this.handleCharacterSelection.bind(this);
    this.handleEventSelection = this.handleEventSelection.bind(this);
  }

  handlePlaceSelection(item) {
    this.props.onItemSelected({...item, type: 'place'});
  }

  handleCharacterSelection(item) {
    this.props.onItemSelected({...item, type: 'character'});
  }

  handleEventSelection(item) {
    this.props.onItemSelected({...item, type: 'event'});
  }

  render () {
    return <Query query={GET_CATEGORIES}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;
        return <div className="fl w-20">
          <Category key="places"
                    title="Lieux"
                    items={data.places}
                    onItemSelected={this.handlePlaceSelection}/>
          <Category key="characters"
                    title="Personnages"
                    items={data.characters}
                    onItemSelected={this.handleCharacterSelection}/>
          <Category key="events"
                    title="Evènements"
                    items={data.events}
                    onItemSelected={this.handleEventSelection}/>
        </div>;
      }}
    </Query>;

  }
}
