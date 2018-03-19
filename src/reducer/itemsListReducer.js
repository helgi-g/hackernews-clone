import { List, Map, Record } from 'immutable'
import arrToMap from '../utils/arrToMap'

const StoryRecord = Record({
  id: null,
  deleted: false,	
  type:	null,
  by: null,
  time: null,
  text: null,
  dead:	false,
  parent: null,
  poll: null,
  kids:	[],
  url: null,
  score: null,
  title: null,
  parts: null,
  descendants: null
})

const ReducerRecord = Record({
  entities: arrToMap([], StoryRecord),
  loading: false,
  loaded: false
})
const defaultState = new ReducerRecord()
console.log('defaultState = ' + defaultState)
export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_ITEMS_START':
      return state.set('loading', true)
    case 'LOAD_ITEMS_SUCCESS': 
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('entities', arrToMap(payload, StoryRecord))
    case 'CLEAR_ITEMS':
      console.log('!!! CLEAR_ITEMS')
      return state.clear()
    case 'LOAD_ITEMS_ERROR':
      console.log(payload)
  }
  return state
}

