import React from 'react'
import JsxParser from 'react-jsx-parser'

export default function Content({ html }) {
  let txt = document.createElement("textarea")
  txt.innerHTML = html
  html = txt.value
  html = html.replace(/<p>/g, '<br/>')
  return <JsxParser jsx={html} />
}