import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import stories from './stories'
import user from './user'


export default combineReducers({
  router,
  stories,
  user
})