import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadItems } from '../AC/itemsListAC'
import { NavLink, Redirect } from 'react-router-dom'
import ListItem from './ListItem'
import NotFaund from './NotFaund'
import Loading from './Loading'

class StoriesList extends Component {

  componentWillMount() {
    this.props.loadItems(this.props.type, this.props.page)
  }

  render() {
    const { loading, loaded, items, page, type} = this.props
    if (loading) return <Loading />
    if (items.size == 0) return <NotFaund />
    const list = items.valueSeq().map((item) => <li key={item.id}><ListItem story={item}/></li>)
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
    items: state.items.entities,
    loading: state.items.loading,
    loaded: state.items.loaded
  }
}, { loadItems })(StoriesList)
