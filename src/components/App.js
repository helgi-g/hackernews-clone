import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import './style.css'
import StoriesList from './StoriesList'
import StoriesPage from './routes/StoriesPage'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/new/1' activeStyle={{ color: 'red' }}>New</NavLink>
          <NavLink to='/top/1' activeStyle={{ color: 'red' }}>Top</NavLink>
          <NavLink to='/best/1' activeStyle={{ color: 'red' }}>Best</NavLink>
          <NavLink to='/ask/1' activeStyle={{ color: 'red' }}>Ask</NavLink>
          <NavLink to='/show/1' activeStyle={{ color: 'red' }}>Show</NavLink>
          <NavLink to='/job/1' activeStyle={{ color: 'red' }}>Job</NavLink>
          <NavLink to='/err' activeStyle = {{color: 'red'}}>Err</NavLink>
        </nav>
        <Switch>
          <Redirect from='/' to='/new/1' exact />
          <Route path='/:type/:page' component={StoriesPage} />
          <Route path='*' render={this.notFound} />
        </Switch>
      </div>  
    )
  }
  notFound = () => <h1>Not Found</h1>
}
export default App