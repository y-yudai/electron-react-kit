import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const DOM_RENDERING_ROOT_ID = 'root'
const rootDOM = document.getElementById(DOM_RENDERING_ROOT_ID)

if (rootDOM !== null) {
  ReactDOM.render(<App />, rootDOM)
}
