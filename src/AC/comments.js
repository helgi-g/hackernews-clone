export function loadComments(parentId, comments) {
  return (dispatch) => {
    console.log('AC = ' + comments)
    dispatch({
      type: 'LOAD_COMMENTS_START',
      payload: {
        parentId: parentId,
        comments: comments
      }
    })
    comments.forEach(id => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: 'LOAD_COMMENT_SUCCESS',
            payload: {
              parentId: parentId,
              comment: res
            }
          })
        })
    })
  }
}

export function clearComments() {
  return {
    type: 'CLEAR_COMMENTS'
  }
}