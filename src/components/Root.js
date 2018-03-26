import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from '../store'
import history from '../history'
import App from './App'

export default function Root() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>  
        <App/>
      </ConnectedRouter> 
    </Provider>  
  )
}
