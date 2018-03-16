import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadStories, clearStories } from '../AC/stories'
import { NavLink } from 'react-router-dom'
import StoryItem from './StoryItem'

class StoriesList extends Component {

  componentWillMount() {
    console.log('!!! ListWillMount')
    this.props.loadStories(this.props.type, this.props.page)
    
  }
  render() {
    const { type, page, loading, loaded, items } = this.props
    const list = items.valueSeq().map((item) => {
      if (item.id) return <li key={item.id}><StoryItem story={item}/></li>
    })
    const nextPage = +page + 1
    return (
      <div>
        <h1>{type}:{page}</h1>
        <ul>{list}</ul>
        <NavLink to={`/${type}/${nextPage}`}>More</NavLink>
      </div>
    )
  }
  componentWillUnmount() {
    console.log('!!! componentWillUnmount')
    this.props.clearStories()
  }
}

export default connect((state) => {
  return {
    items: state.stories
  }
}, { loadStories, clearStories })(StoriesList)
