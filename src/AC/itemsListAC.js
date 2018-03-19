export function loadItems(type, page) {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_ITEMS_START'
    })
    fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText)        
        return res.json()
      })
      .then(res => {
        console.log(res)
        const size = 10
        const remainder = (res.length >= page * size) ? size : (res.length % size)
        console.log('remainder=' + remainder)
        const endpoint = remainder == size ? +page * size : ((+page - 1) * size) + remainder
        console.log('start=' + ((+page - 1) * size))
        console.log('endpoint=' + endpoint)
        const arrID = res.slice((+page - 1) * size, endpoint)
        console.log('arrID = ' + arrID)
        Promise.all(arrID.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(res => res.json())))
          .then(values => dispatch({
            type: 'LOAD_ITEMS_SUCCESS',
            payload: values
          }))
      })
      .catch(error => {
        dispatch({
          type: 'LOAD_ITEMS_ERROR',
          payload: error
        })
      })
  }
}
export function clearStories() {
  return {
    type: 'CLEAR_ITEMS'
  }
}