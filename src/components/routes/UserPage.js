import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import User from '../User'

class UserPage extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <User key={id} id={id} />
    )
  }
}

export default UserPage