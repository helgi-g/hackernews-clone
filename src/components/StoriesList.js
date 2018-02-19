import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadStories } from '../AC'

class StoriesList extends Component {

  componentWillMount() {
    this.props.loadStories(this.props.type)
  }

  render() {
    console.log(this.props.type);
    
    console.log(this.props.items);
    
    return (
      <div>
        {this.props.type}
      </div>
    )
  }
}

export default connect((state) => {
  return {
    items: state.items
  }
}, { loadStories })(StoriesList)
