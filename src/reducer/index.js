import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import stories from './stories'

export default combineReducers({
  router,
  stories
})