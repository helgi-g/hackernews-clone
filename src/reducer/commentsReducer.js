import { OrderedMap } from 'immutable'
import {
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_DONE,
  LOAD_COMMENTS_ERROR,
  CLEAR_COMMENTS
} from '../constants'

const defaultState = OrderedMap({})

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_COMMENTS_START:
      return state.setIn([payload.parentId, 'loading'], true)
    case LOAD_COMMENTS_DONE:
      return state
        .setIn([payload.parentId, 'loading'], false)
        .setIn([payload.parentId, 'loaded'], true)
        .setIn([payload.parentId, 'data'], payload.comments)
    case CLEAR_COMMENTS:
      return state.clear()
    case LOAD_COMMENTS_ERROR:
      console.log('Load comments error: ' + payload)
  }
  return state
}