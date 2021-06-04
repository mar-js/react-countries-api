import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import reducer from './reducers/'

import { useEffect } from 'react'

import { getCountries } from './actions'

const INITIAL_STATE = {
  search: '',
  filter: '',
  countries: [],
  detailsCountry: {},
  fetching: false
}

const COMPOSE_ENHANCERS = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function generateStore() {
  const STORE = createStore(
    reducer,
    INITIAL_STATE,
    COMPOSE_ENHANCERS(applyMiddleware(thunk))
  )

  getCountries()(STORE.dispatch, STORE.getState)

  return STORE
}

export default generateStore