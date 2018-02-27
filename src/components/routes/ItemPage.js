import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Item from '../Item'

class ItemPage extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <Item key={id} id={id}/>
    )
  }
}

export default ItemPage