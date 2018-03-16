import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import getTimeAgo from '../utils/getTimeAgo'


class StoryItem extends Component {
  componentDidMount() {
    console.log(this.props.story.id + this.props.story.title)    
  }
  render() {
    const { story } = this.props
    return (
      <div>
        <h3><a href={story.url ? story.url : `/item/${story.id}`}>{story.title}</a></h3>
        <div>
          <span>{story.score} points
          | by <NavLink to={`/user/${story.by}`}>{story.by}</NavLink>
          | {getTimeAgo(story.time)}
          | <NavLink to={`/item/${story.id}`}>{story.descendants} comments</NavLink>
          </span> 
        </div>
      </div>
    )
  }
}

export default connect()(StoryItem)