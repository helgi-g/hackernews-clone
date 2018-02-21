export function loadStories(type, page) {
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
      .then(res => {
        const arrID = res.slice((+page - 1) * 20, +page * 20)
        let stories = []
        let i = 0
        arrID.forEach(id => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(res => {
              stories.push(res)
              return stories
            })
            .then(stories => {
              i++
              if (i == 20) {
                dispatch({
                  type: 'LOAD_STORIES_SUCCESS',
                  payload: stories
                })
              }
            })
        })
      })
      .catch(error => {
        dispatch({
          type: 'LOAD_STORIES_ERROR',
          payload: { error }
        })
      })
  }
}