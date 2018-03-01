export default (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_USER':
      console.log('LOAD_USER')
      return payload
    case 'LOAD_USER_ERROR':
      console.log(payload)
    case 'CLEAR_USER':
      return {}  
  }
  return state
}