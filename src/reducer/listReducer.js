import { Record } from 'immutable'
import {
  LOAD_LIST_START,
  LOAD_LIST_DONE,
  LOAD_LIST_ERROR
} from '../constants'

const ReducerRecord = Record({
  data: [],
  loading: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_LIST_START:
      return state.set('loading', true)
    case LOAD_LIST_DONE: 
      return state
        .set('loading', false)
        .set('data', payload)
    case LOAD_LIST_ERROR:
      console.log('Load list error: ' + payload)
  }
  return state
}

