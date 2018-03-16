import React, { Component } from 'react'
import { connect } from 'react-redux'
import decodeHtml from '../utils/decodeHtml'
import CommentList from './CommentsList'



class CommentItem extends Component {
  state = {
    isOpen: false
  }
  render() {
    console.log('Render CommentItem :' + this.props.comment.id)
    return (
      <div>
        {this.props.comment.id + decodeHtml(this.props.comment.text)}
        {this.props.comment.kids ? <div>
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