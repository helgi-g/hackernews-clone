import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadItem, clearItem } from '../AC/item'
import { clearComments } from '../AC/comments'

import StoryItem from './StoryItem'
import decodeHtml from '../utils/decodeHtml'
import CommentsList from './CommentsList'

class Item extends Component {
  componentWillMount() {
    console.log('Item will mount!')
    this.props.loadItem(this.props.id)
  }
  render() {
    return (
      <div>
        <h1>ItemPage</h1>
        <StoryItem story={this.props.item} />
        {this.props.item.text ? <p>{decodeHtml(this.props.item.text)}</p> : ''}
        {this.props.item.kids ? <CommentsList kids={this.props.item.kids} id={this.props.item.id} />
          : ''}
      </div>
    )
  }
  componentWillUnmount() {
    console.log('Item will unmount!!!')
    this.props.clearItem()
    this.props.clearComments()
  }
}

export default connect((state) => {
  return {
    item: state.item
  }
}, { loadItem, clearItem, clearComments })(Item)