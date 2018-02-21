import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadStories } from '../AC'
import { NavLink } from 'react-router-dom'

class StoriesList extends Component {

  componentWillMount() {
    this.props.loadStories(this.props.type, this.props.page)
  }

  render() {
    const { type, page, loading, loaded, items } = this.props
    const list = items.map((item) => {
      return <li key={item.id}>{item.title}</li>
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
}

export default connect((state) => {
  return {
    loading: state.stories.loading,
    loaded: state.stories.loaded,
    items: state.stories.items
  }
}, { loadStories })(StoriesList)
