import {
  LOAD_ITEM_START,
  LOAD_ITEM_DONE,
  LOAD_ITEM_ERROR
} from '../constants'

export function loadItem(id) {
  return (dispatch) => { 
    dispatch({
      type: LOAD_ITEM_START
    })
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText)
        return res.json()
      })
      .then(res => {
        dispatch({
          type: LOAD_ITEM_DONE,
          payload: res
        })
      })
      .catch(error => {
        dispatch({
          type: LOAD_ITEM_ERROR,
          payload: error
        })
      })
  }
}