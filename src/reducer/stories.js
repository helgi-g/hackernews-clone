import { List, Map, Record } from 'immutable'

function arrToMap(arr) {
  return arr.reduce((acc, item) => {
    console.log('acc = ' + acc)
    return acc.set(item, '')
  }, new Map({}))
}
/*const StoryRecord = Record({
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
const StoriesMap = arrToMap([], StoryRecord)*/
const defaultState = arrToMap([])
console.log('defaultState = ' + defaultState)
export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_STORY_START':
      state = arrToMap(payload)  
      console.log('Start state = ' + state)
      return state
    case 'LOAD_STORY_SUCCESS':
      return state.set(payload.id, payload)
    case 'CLEAR_STORIES':
      console.log('!!! CLEAR_STORIES')
      return state.clear()
  }
  return state
}

