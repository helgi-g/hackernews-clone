import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StoriesList from '../StoriesList'

class StoriesPage extends Component {
  render() {
    const { type, page } = this.props.match.params
    return (
      <StoriesList type={type} page={page} key={type+page}/>
    )
  }
}

export default StoriesPage