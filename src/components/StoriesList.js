import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadStories } from '../AC'

class StoriesList extends Component {

  componentWillMount() {
    const { type } = this.props
    this.props.loadStories(type)
  }

  render() {
    console.log(this.props.items);
    
    return (
      <div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    items: state.items
  }
}, { loadStories })(StoriesList)
