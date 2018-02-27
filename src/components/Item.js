import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Item extends Component {
  render() {
    return (
      <div>
        <h1>ItemPage</h1>
        {this.props.id}
      </div>
    )
  }
}

export default connect()(Item)