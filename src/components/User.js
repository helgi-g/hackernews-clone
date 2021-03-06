import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadUser, clearUser } from '../AC/userAC'
import Loading from './Loading'
import NotFound from './NotFound'
import Content from './Content'
import getTimeAgo from '../utils/getTimeAgo'

class User extends Component {

  componentWillMount() {
    this.props.loadUser(this.props.id)
  }

  render() {
    if (this.props.loading) return <Loading />
    if (!this.props.user) return <NotFound />
    let { id, created, karma, about } = this.props.user
    return (
      <div>
        <p>user: {id}</p>
        <p>created: {getTimeAgo(created)}</p>
        <p>karma: {karma}</p>
        {about ? <div><span>about: </span> <Content html={about} /></div> : ''}
      </div>
    )
  }
}

export default connect((state) => {
  return {
    user: state.user.data,
    loading: state.user.loading
  }
}, { loadUser })(User)