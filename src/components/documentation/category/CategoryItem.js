import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';

export class CategoryItem extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.onItemSelected(this.props.item.id);
  }

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
