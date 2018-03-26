import {
  LOAD_LIST_START,
  LOAD_LIST_DONE,
  LOAD_LIST_ERROR
} from '../constants'

export function loadItems(type, page) {
  return (dispatch) => {
    dispatch({
      type: LOAD_LIST_START
    })
    fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText)        
        return res.json()
      })
      .then(res => {
        const size = 10
        const remainder = (res.length >= page * size) ? size : (res.length % size)
        const endpoint = remainder == size ? +page * size : ((+page - 1) * size) + remainder
        const arrID = res.slice((+page - 1) * size, endpoint)
        Promise.all(arrID.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(res => res.json())))
          .then(values => dispatch({
            type: LOAD_LIST_DONE,
            payload: values
          }))
      })
      .catch(error => {
        dispatch({
          type: LOAD_LIST_ERROR,
          payload: error
        })
      })
  }
}