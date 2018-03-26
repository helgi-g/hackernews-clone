import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import list from './listReducer'
import user from './userReducer'
import item from './itemReducer'
import comments from './commentsReducer'

export default combineReducers({
  router,
  list,
  item,
  comments,
  user
})