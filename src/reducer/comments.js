import arrToMap from '../utils/arrToMap'

const defaultState = arrToMap([])

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_COMMENTS_START':
      return state
    case 'LOAD_COMMENTS_SUCCESS':
      return state.setIn([payload.parentId, payload.comment.id], payload.comment)
    case 'CLEAR_COMMENTS':
      console.log('!!! CLEAR_COMMENTS')
      return state.clear()
    case 'LOAD_COMMENTS_ERROR':
      console.log(payload)
  }
  return state
}