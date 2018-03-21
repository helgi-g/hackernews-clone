import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import items from './itemsListReducer'
import user from './user'
import item from './itemReducer'
import comments from './commentsReducer'




export default combineReducers({
  router,
  items,
  item,
  comments,
  user
})