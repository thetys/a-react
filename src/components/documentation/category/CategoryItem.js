import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDocumentationContent } from '../../../store/actions';

class CategoryItem extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.selectDocumentationContent(this.props.type, this.props.item.id);
  }

  render () {
    return <li onClick={this.handleClick}>{this.props.item.name}</li>;
  }
}

export default connect(null, {selectDocumentationContent})(CategoryItem);
