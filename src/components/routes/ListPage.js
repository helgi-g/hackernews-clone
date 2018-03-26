import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemsList from '../List'
import NotFaund from '../NotFaund'

export default function ItemsListPage({ match }) {
  const { type, page } = match.params
  const typesOfLists = [
    'new',
    'top',
    'best',
    'ask',
    'show',
    'job'
  ]
  return typesOfLists.indexOf(type) > -1 ?
    <ItemsList type={type} page={page} key={type + page} />
    : <NotFaund />
}