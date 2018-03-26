import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../AC/commentsAC'
import CommentItem from './CommentItem'
import Loading from './Loading'

class CommentsList extends Component {

  componentWillMount() {
    const loaded = this.props.comments.getIn([this.props.id, 'loaded'])
    if (!loaded) this.props.loadComments(this.props.id, this.props.kids)
  }

  render() {
    const comments = this.props.comments.getIn([this.props.id, 'data'])
    const loading = this.props.comments.getIn([this.props.id, 'loading'])
    let list
    if (loading) return <Loading />
    if (comments) {
      list = comments.map((comment) => {
        if (comment.id) return !comment.deleted ?
          <li key={comment.id}><CommentItem comment={comment} /></li>
          : ''
      })
    }
    return (
      <ul>
        {list}
      </ul>
    )
  }
}

export default connect((state) => {
  return {
    comments: state.comments
  }  
}, { loadComments })(CommentsList)