import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import './style.css'
import StoriesList from './StoriesList'


class App extends Component {
  render() {
    return (
    <div>
        <StoriesList type='new' />
    </div>  
    )
  }
}
export default connect()(App)