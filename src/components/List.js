import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadItems } from '../AC/listAC'
import { NavLink } from 'react-router-dom'
import NotFaund from './NotFaund'
import Loading from './Loading'
import getTimeAgo from '../utils/getTimeAgo'
import getDomain from '../utils/getDomain'

class List extends Component {

  componentWillMount() {
    this.props.loadItems(this.props.type, this.props.page)
  }

  render() {
    const { loading, loaded, items, page, type } = this.props
    if (loading) return <Loading />
    if (items.length == 0) return <NotFaund />
    return (
      <div>
        <ul>
          {items.map((item) => <li key={item.id}>
            <div>
              <h3><a href={item.url ? item.url : `/item/${item.id}`}>{item.title}</a></h3>
              {item.url ? <a href={item.url}>({getDomain(item.url)})</a> : ''}
              <div>
                <span>{item.score} points
                  | by <NavLink to={`/user/${item.by}`}>{item.by}</NavLink>
                  | {getTimeAgo(item.time)}
                  | <NavLink to={`/item/${item.id}`}>{item.descendants} comments</NavLink>
                </span>
              </div>
            </div>
          </li>)}
        </ul>
        <NavLink to={`/${type}/${+page + 1}`}>More</NavLink>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    items: state.list.data,
    loading: state.list.loading
  }
}, { loadItems })(List)