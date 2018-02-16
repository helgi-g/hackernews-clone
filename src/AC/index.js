export function loadStories(type) {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_STORIES_START',
      payload: { type }
    })
    fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText)
        return res.json()
      })  
      .then(res => dispatch({
        type: 'LOAD_STORIES_SUCCESS',
        payload: res
      }))
      .catch(error => {
        dispatch(replace('/error'))
        dispatch({
          type: 'LOAD_STORIES_ERROR',
          payload: { error }
        })
      })
  }
}