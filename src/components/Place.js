import React, { Component } from 'react';

class Place extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.place.name}
        </div>
      </div>
    )
  }
}

export default Place;
