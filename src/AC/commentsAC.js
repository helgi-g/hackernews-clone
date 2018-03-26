import {
  LOAD_COMMENTS_START,
  LOAD_COMMENTS_DONE,
  LOAD_COMMENTS_ERROR,
  CLEAR_COMMENTS
} from '../constants'

export function loadComments(parentId, comments) {
  return (dispatch) => {
    dispatch({
      type: LOAD_COMMENTS_START,
      payload: {
        parentId
      }
    })
    Promise.all(comments.map(id => 
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => {
          if (res.status >= 400) throw new Error(res.statusText)
          return res.json()
        })
    )).then(res => {
      dispatch({
        type: LOAD_COMMENTS_DONE,
        payload: {
          parentId: parentId,
          comments: res
        }
      })
    })
      .catch(error => {
        dispatch({
          type: LOAD_COMMENTS_ERROR,
          payload: error
        })
      })
  }
}

export function clearComments() {
  return {
    type: CLEAR_COMMENTS
  }
}