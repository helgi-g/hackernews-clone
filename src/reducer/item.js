export default (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_ITEM':
      console.log('Load item' + payload)
      return payload
    case 'LOAD_ITEM_ERROR':
      console.log(payload)
    case 'CLEAR_ITEM':
      return {}
  }
  return state
}