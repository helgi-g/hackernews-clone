import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CommentList from './CommentsList'
import Content from './Content'
import getTimeAgo from '../utils/getTimeAgo'


class CommentItem extends Component {
  state = {
    isOpen: false
  }

  render() {
    let { text, kids, id, by, time } = this.props.comment
    return (
      <div className='commentItem'>
        <Content html={text}/>
        <div className='contentInfo'>
          <span>by <NavLink to={`/user/${by}`}>{by}</NavLink> </span>
          <span>| {getTimeAgo(time)} </span>
          {kids ? <span>| comments: {kids.length} <button onClick={this.toggleOpen}>
            {this.state.isOpen ? '[-]' : '[+]'}</button></span>
            : ''}
          {this.state.isOpen ? <CommentList kids={kids} id={id} /> : ''}
        </div>
      </div>
    )
  }
  
  toggleOpen = () => this.setState({
    isOpen: !this.state.isOpen
  })
}

export default connect()(CommentItem)