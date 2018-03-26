import { Record } from 'immutable'
import {
  LOAD_ITEM_START,
  LOAD_ITEM_DONE,
  LOAD_ITEM_ERROR
} from '../constants'

const ReducerRecord = Record({
  data: {},
  loading: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_ITEM_START:
      return state.set('loading', true)
    case LOAD_ITEM_DONE:
      return state
        .set('loading', false)
        .set('data', payload)
    case LOAD_ITEM_ERROR:
      console.log('Load item error: ' + payload)
  }
  return state
}