import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadItem, clearItem } from '../AC/itemAC'
import { clearComments } from '../AC/commentsAC'
import ListItem from './ListItem'
import CommentsList from './CommentsList'
import NotFaund from './NotFaund'
import decodeHtml from '../utils/decodeHtml'
import Loading from './Loading'

class Item extends Component {
  componentWillMount() {
    console.log('Item will mount!')
    this.props.loadItem(this.props.id)
  }
  render() {
    if (this.props.loading) return <Loading />
    return this.props.item ? 
      <div>
        <h1>ItemPage</h1>
        <ListItem story={this.props.item} />
        {this.props.item.text ? <p>{decodeHtml(this.props.item.text)}</p> : ''}
        {this.props.item.kids ? <CommentsList kids={this.props.item.kids} id={this.props.item.id} />
          : ''}
      </div>
    : <NotFaund/>
  }
  componentWillUnmount() {
    console.log('Item will unmount!!!')
    this.props.clearItem()
    this.props.clearComments()
  }
}

export default connect((state) => {
  return {
    item: state.item.data,
    loading: state.item.loading
  }
}, { loadItem, clearItem, clearComments })(Item)