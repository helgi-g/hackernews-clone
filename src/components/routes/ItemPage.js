import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

export default function ItemPage({ match }) {
  const { id } = match.params
  return <Item key={id} id={id}/>
}