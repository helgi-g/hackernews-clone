export function loadComments(parentId, comments) {
  return (dispatch) => {
    console.log('AC = ' + comments)
    dispatch({
      type: 'LOAD_COMMENTS_START',
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
        type: 'LOAD_COMMENTS_SUCCESS',
        payload: {
          parentId: parentId,
          comments: res
        }
      })
    })
  }
}

export function clearComments() {
  return {
    type: 'CLEAR_COMMENTS'
  }
}