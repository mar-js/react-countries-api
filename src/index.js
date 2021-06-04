import React, { StrictMode } from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import generateStore from './redux/store'

import App from './App'

const STORE = generateStore()

render(
  <StrictMode>
    <Provider store={ STORE }>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
