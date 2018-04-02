import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentList from './CommentsList'
import Content from './Content'

class CommentItem extends Component {
  state = {
    isOpen: false
  }

  render() {
    let { text, kids, id } = this.props.comment
    return (
      <div>
        <Content html={text}/>
        {kids ? <div>
          <span>Comments: {kids.length}</span>
          <button onClick={this.toggleOpen}>*</button>
          {this.state.isOpen ? <CommentList kids={kids} id={id} />
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