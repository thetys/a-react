import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';

export class CategoryItem extends Component {
  render () {
    return <ApolloConsumer>
      {client => (
        <li onClick={() => client.writeData({
          data: {
            selectedItem: {
              type: this.props.type,
              id: this.props.item.id,
              __typename: 'DocumentationItem',
            },
          },
        })}>{this.props.item.name}</li>
      )}
    </ApolloConsumer>;
  }
}
