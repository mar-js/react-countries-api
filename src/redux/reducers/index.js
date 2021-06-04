function reducers(state, action) {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return {
        ...state,
        fetching: true
      }
    case 'GET_COUNTRIES_SUCCESS':
      return {
        ...state,
        fetching: false,
        countries: [ ...action.payload ]
      }
    case 'GET_COUNTRIES_ERROR':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case 'GET_COUNTRY':
      return {
        ...state,
        fetching: true
      }
    case 'GET_COUNTRY_SUCCESS':
      return {
        ...state,
        fetching: false,
        detailsCountry: { ...action.payload }
      }
    case 'GET_COUNTRY_ERROR':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducers
