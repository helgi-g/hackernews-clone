import { Record } from 'immutable'
import {
  LOAD_USER_START,
  LOAD_USER_DONE,
  LOAD_USER_ERROR
} from '../constants'

const ReducerRecord = Record({
  data: {},
  loading: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_USER_START:
      return state.set('loading', true) 
    case LOAD_USER_DONE:
      return state      
        .set('loading', false)   
        .set('data', payload)
    case LOAD_USER_ERROR:
      console.log('Load user error:' + payload)
  }
  return state
}