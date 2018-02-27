import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class StoryItem extends Component {
  componentDidMount() {
    console.log(this.props.story.id + this.props.story.title)    
  }
  render() {
    const { story } = this.props
    function getTimeAgo(time) {
      var now = new Date();
      var nowTs = Math.floor(now.getTime() / 1000); 
      var seconds = nowTs - time;
      if (seconds > 2 * 24 * 3600) {
        return "a few days ago";
      }
      if (seconds > 24 * 3600) {
        return "yesterday";
      }
      if (seconds > 3600) {
        return "a few hours ago";
      }
      if (seconds > 1800) {
        return "Half an hour ago";
      }
      if (seconds > 60) {
        return Math.floor(seconds / 60) + " minutes ago";
      }
    }
    return (
      <li>
        <h3><a href={story.url ? story.url : `/item/${story.id}`}>{story.title}</a></h3>
        <div>
          <span>{story.score} points
          | by <NavLink to={`/user/${story.by}`}>{story.by}</NavLink>
          | {getTimeAgo(story.time)}
          | <NavLink to={`/item/${story.id}`}>{story.descendants} comments</NavLink>
          </span> 
        </div>
      </li>
    )
  }
}

export default connect()(StoryItem)