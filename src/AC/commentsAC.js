import { LOAD_COMMENTS_START, LOAD_COMMENTS_DONE, LOAD_COMMENTS_ERROR } from '../constants'


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
        .then(res => res.json())
    )).then(res => {
      console.log('Comments array' + res)
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
    type: 'CLEAR_COMMENTS'
  }
}