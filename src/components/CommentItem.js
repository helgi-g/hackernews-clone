import React, { Component } from 'react'
import { connect } from 'react-redux'
import decodeHtml from '../utils/decodeHtml'
import CommentList from './CommentsList'



class CommentItem extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div>
        {this.props.comment.id + decodeHtml(this.props.comment.text)}
        {this.props.comment.kids ? <div>
          <span>Comments: {this.props.comment.kids.length}</span>
          <button onClick={this.toggleOpen}>*</button>
          {this.state.isOpen ? <CommentList kids={this.props.comment.kids} id={this.props.comment.id} />
          : ''}
          </div> : ''}
      </div>
    )
  }
  toggleOpen = () => this.setState({
    isOpen: !this.state.isOpen
  })
}

export default connect()(CommentItem)