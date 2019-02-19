import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { PLACES_QUERY } from './PlaceList';

const PLACE_MUTATION = gql`
    mutation CreatePlace($name: String!, $description: String!) {
        createPlace(name: $name, description: $description) {
            id
            name
            description
        }
    }
`;

class CreatePlace extends Component {
  state = {
    name: '',
    description: '',
  };

  render () {
    const { name, description } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input className="mb2" value={name}
                 onChange={e => this.setState({ name: e.target.value })}
                 type="text" placeholder="Nom du lieu"/>
          <input className="mb2" value={description}
                 onChange={e => this.setState({ description: e.target.value })}
                 type="text" placeholder="Description du lieu"/>
        </div>
        <Mutation mutation={PLACE_MUTATION}
                  variables={{ name, description }}
                  onCompleted={() => this.props.history.push('/')}
                  update={(store, { data: { createPlace } }) => {
                    const data = store.readQuery({ query: PLACES_QUERY });
                    data.places.unshift(createPlace);
                    store.writeQuery({
                      query: PLACES_QUERY,
                      data
                    })
                  }}
        >
          {placeMutation => <button onClick={placeMutation}>Valider</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreatePlace;
