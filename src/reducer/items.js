export default (state = [], action) => {
  const { type, payload } = action
  return type == 'LOAD_STORIES_SUCCESS' ? payload : state
}