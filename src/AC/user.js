export function loadUser(id) {
  return (dispatch) => { 
    fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
      .then(res => {
        if (res.status >= 400) throw new Error(res.statusText)
        return res.json()
      })
      .then(res => {
        console.log('user:' + res.id)
        dispatch({
          type: 'LOAD_USER',
          payload: res
        })
      })
      .catch(error => {
        dispatch({
          type: 'LOAD_USER_ERROR',
          payload: error
        })
      })
  }
}

export function clearUser() {
  return {
    type: 'CLEAR_USER'
  }
}