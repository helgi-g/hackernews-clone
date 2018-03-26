import {
  LOAD_USER_START,
  LOAD_USER_DONE,
  LOAD_USER_ERROR
} from '../constants'

export function loadUser(id) {
  return (dispatch) => { 
    dispatch({
      type: LOAD_USER_START
    })
    fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText)
        return res.json()
      })
      .then(res => {
        dispatch({
          type: LOAD_USER_DONE,
          payload: res
        })
      })
      .catch(error => {
        dispatch({
          type: LOAD_USER_ERROR,
          payload: error
        })
      })
  }
}