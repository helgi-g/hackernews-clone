import { Record, OrderedMap } from 'immutable'
import { LOAD_COMMENTS_START, LOAD_COMMENTS_DONE, LOAD_COMMENTS_ERROR } from '../constants'
import arrToMap from '../utils/arrToMap'

/*const CommentRecord = Record({
  id: null,
  deleted: false,
  type: null,
  by: null,
  time: null,
  text: null,
  dead: false,
  parent: null,
  poll: null,
  kids: [],
  url: null,
  score: null,
  title: null,
  parts: null,
  descendants: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  loaded: false
})
*/

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
        .setIn([payload.parentId, 'arr'], payload.comments)
    case 'CLEAR_COMMENTS':
      console.log('!!! CLEAR_COMMENTS')
      return state.clear()
    case LOAD_COMMENTS_ERROR:
      console.log('Load comments error: ' + payload)
  }
  return state
}