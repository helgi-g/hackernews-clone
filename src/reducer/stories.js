import { Record } from 'immutable'

const StoriesRecord = Record({
  loading: false,
  loaded: false,
  items: []
})

const defaultState = new StoriesRecord()

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_STORIES_START':
      return state.set('loading', true)
    case 'LOAD_STORIES_SUCCESS': 
      return state
        .set('loading', false)
        .set('loaded', true)
        .set('items', payload)
  }
  return state
}

