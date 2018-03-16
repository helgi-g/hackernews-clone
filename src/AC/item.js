export function loadItem(id) {
  return (dispatch) => { 
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText)
        return res.json()
      })
      .then(res => {
        console.log('Load item action')
        dispatch({
          type: 'LOAD_ITEM',
          payload: res
        })
      })
      .catch(error => {
        dispatch({
          type: 'LOAD_ITEM_ERROR',
          payload: error
        })
      })
  }
}

export function clearItem() {
  return {
    type: 'CLEAR_ITEM'
  }
}