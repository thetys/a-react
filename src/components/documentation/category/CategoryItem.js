import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';

export class CategoryItem extends Component {
  render () {
    return <ApolloConsumer>
      {client => (
        <li onClick={() => client.writeData({
          data: {
            selectedItem: this.props.item.id,
          },
        })}>{this.props.item.name}</li>
      )}
    </ApolloConsumer>;
  }
}
