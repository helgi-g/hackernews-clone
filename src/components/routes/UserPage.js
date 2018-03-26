import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from '../User'

export default function UserPage({ match }){
  const { id } = match.params
  return <User key={id} id={id} />
}