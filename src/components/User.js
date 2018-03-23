import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadUser, clearUser } from '../AC/userAC'
import Loading from './Loading'
import getTimeAgo from '../utils/getTimeAgo'
import decodeHtml from '../utils/decodeHtml'



class User extends Component {
  componentWillMount() {
    console.log('!!!UserWillLoad')
    this.props.loadUser(this.props.id)
  }
  render() {
    if (this.props.loading) return <Loading />
    return (
      <div>
        <h1>UserPage</h1>
        <p>user: {this.props.user.id}</p>
        <p>created: {getTimeAgo(this.props.user.created)}</p>
        <p>karma: {this.props.user.karma}</p>
        {this.props.user.about ? <p>about: {decodeHtml(this.props.user.about)}</p> : ''}
      </div>
    )
  }
  componentWillUnmount() {
    console.log('!!! componentWillUnmount')
  }
}

export default connect((state) => {
  return {
    user: state.user.data,
    loading: state.user.loading
  }
}, { loadUser, clearUser })(User)