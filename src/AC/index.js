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
        console.log(res.length)
        const size = 20
        const remainder = (res.length > page * size) ? size : (res.length % size)
        console.log(remainder)
        const endpoint = remainder == size ? +page * size : ((+page - 1) * size) + remainder
        console.log(endpoint)
        const arrID = res.slice((+page - 1) * size, endpoint)
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
              if (i == remainder & stories.length >= ((+page - 1) * size) + remainder) {
                dispatch({
                  type: 'LOAD_STORIES_SUCCESS',
                  payload: stories
                })
              } else {
                dispatch({
                  type: 'LOAD_STORIES_SUCCESS',
                  payload: []
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