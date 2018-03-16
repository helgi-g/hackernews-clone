import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import stories from './stories'
import user from './user'
import item from './item'
import comments from './comments'




export default combineReducers({
  router,
  stories,
  item,
  comments,
  user
})