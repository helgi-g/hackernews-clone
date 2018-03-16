import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../AC/comments'
import CommentItem from './CommentItem'

class CommentsList extends Component {
  componentWillMount() {
    console.log('Comments will mount!')
    console.log('ID =' + this.props.id)
    this.props.loadComments(this.props.id, this.props.kids)
  }
  componentWillUpdate(nextProps) {
    console.log(nextProps.comments.valueSeq())
  }
  render() {
    console.log('Comments by ID =' + this.props.comments.get(this.props.id))
    const comments = this.props.comments.get(this.props.id)
    let list
    if (comments) {
      list = comments.valueSeq().map((comment) => {
        if (comment.id) return !comment.deleted ?
          <li key={comment.id}><CommentItem comment={comment} /></li>
          : ''
      })
    } else {
      list = <span>List loading...</span>
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