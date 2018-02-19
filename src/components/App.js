import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import './style.css'
import StoriesList from './StoriesList'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to='/new' activeStyle={{ color: 'red' }}>New</NavLink>
          <NavLink to='/top' activeStyle={{ color: 'red' }}>Top</NavLink>
          <NavLink to='/best' activeStyle={{ color: 'red' }}>Best</NavLink>
          <NavLink to='/ask' activeStyle={{ color: 'red' }}>Ask</NavLink>
          <NavLink to='/show' activeStyle={{ color: 'red' }}>Show</NavLink>
          <NavLink to='/job' activeStyle={{ color: 'red' }}>Job</NavLink>
          <NavLink to='/err' activeStyle = {{color: 'red'}}>Err</NavLink>
        </nav>
        <Switch>
          <Redirect from='/' to='/new' exact />
          <Route path='/new' render={this.getNew} />
          <Route path='/top' render={this.getTop} />
          <Route path='/best' render={this.getBest} />
          <Route path='/ask' render={this.getAsk} />
          <Route path='/show' render={this.getShow} />
          <Route path='/job' render={this.getJob} />
          <Route path='*' render={this.notFound} />
        </Switch>
      </div>  
    )
  }
  notFound = () => <h1>Not Found</h1>
  getNew = () => <StoriesList type='new' key='new' />
  getTop = () => <StoriesList type='top' key='top' />
  getBest = () => <StoriesList type='best' key='best' />
  getAsk = () => <StoriesList type='ask' key='ask' />
  getShow = () => <StoriesList type='show' key='show' />
  getJob = () => <StoriesList type='job' key='job' />
}
export default App