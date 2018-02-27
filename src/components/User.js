import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    return (
      <div>
        <h1>UserPage</h1>
        {this.props.id}
      </div>
    )
  }
}

export default connect()(User)