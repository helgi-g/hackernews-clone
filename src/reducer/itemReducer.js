import { Record, OrderedMap } from 'immutable'

const ReducerRecord = Record({
  data: {},
  loading: false
})

const defaultState = new ReducerRecord()

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_ITEM_START':
      return state.set('loading', true)
    case 'LOAD_ITEM':
      console.log('Load item' + payload)
      return state
        .set('loading', false)
        .set('data', payload)
    case 'LOAD_ITEM_ERROR':
      console.log(payload)
    case 'CLEAR_ITEM':
      return state.clear()
  }
  return state
}