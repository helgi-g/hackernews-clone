import React from 'react'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import './style.css'
import ListPage from './routes/ListPage'
import ItemPage from './routes/ItemPage'
import UserPage from './routes/UserPage'
import NotFound from './NotFound'

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to='/new/1' className='navLink' activeStyle={{ color: '#e85a4f' }}>New</NavLink>
        <NavLink to='/top/1' className='navLink' activeStyle={{ color: '#e85a4f' }}>Top</NavLink>
        <NavLink to='/best/1' className='navLink' activeStyle={{ color: '#e85a4f' }}>Best</NavLink>
        <NavLink to='/ask/1' className='navLink' activeStyle={{ color: '#e85a4f' }}>Ask</NavLink>
        <NavLink to='/show/1' className='navLink' activeStyle={{ color: '#e85a4f' }}>Show</NavLink>
        <NavLink to='/job/1' className='navLink' activeStyle={{ color: '#e85a4f' }}>Job</NavLink>
      </nav>
      <Switch>
        <Redirect from='/' to='/new/1' exact />
        <Route path='/item/:id' component={ItemPage} />
        <Route path='/user/:id' component={UserPage} />
        <Route path='/:type/:page' component={ListPage} />
        <Redirect from='/new' to='/new/1' />
        <Redirect from='/top' to='/top/1' />
        <Redirect from='/best' to='/best/1' />
        <Redirect from='/ask' to='/ask/1' />
        <Redirect from='/show' to='/show/1' />
        <Redirect from='/job' to='/job/1' />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>  
  )
}