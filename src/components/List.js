import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadItems } from '../AC/listAC'
import { NavLink, Redirect } from 'react-router-dom'
import NotFaund from './NotFaund'
import Loading from './Loading'
import getTimeAgo from '../utils/getTimeAgo'


class List extends Component {

  componentWillMount() {
    this.props.loadItems(this.props.type, this.props.page)
  }

  render() {
    const { loading, loaded, items, page, type} = this.props
    if (loading) return <Loading />
    if (items.size == 0) return <NotFaund />
    const list = items.valueSeq().map((item) => <li key={item.id}>
      <div>
        <h3><a href={item.url ? item.url : `/item/${item.id}`}>{item.title}</a></h3>
        <div>
          <span>{item.score} points
            | by <NavLink to={`/user/${item.by}`}>{item.by}</NavLink>
            | {getTimeAgo(item.time)}
            | <NavLink to={`/item/${item.id}`}>{item.descendants} comments</NavLink>
          </span>
        </div>
      </div>
    </li>)
    const nextPage = +page + 1
    return (
      <div>
        <h1>{type}:{page}</h1>
        <ul>{list}</ul>
        <NavLink to={`/${type}/${nextPage}`}>More</NavLink>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    items: state.list.entities,
    loading: state.list.loading,
    loaded: state.list.loaded
  }
}, { loadItems })(List)
