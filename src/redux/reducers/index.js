const GET_COUNTRIES = 'GET_COUNTRIES'
const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'
const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR'
const GET_COUNTRIES_SEARCH = 'GET_COUNTRIES_SEARCH'
const GET_COUNTRIES_SEARCH_SUCCESS = 'GET_COUNTRIES_SEARCH_SUCCESS'
const GET_COUNTRIES_SEARCH_ERROR = 'GET_COUNTRIES_SEARCH_ERROR'
const GET_COUNTRY = 'GET_COUNTRY'
const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS'
const GET_COUNTRY_ERROR = 'GET_COUNTRY_ERROR'

function reducers(state, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        fetching: true
      }
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        countries: [ ...action.payload ]
      }
    case GET_COUNTRIES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case GET_COUNTRIES_SEARCH:
      return {
        ...state,
        fetching: true,
        search: action.payload
      }
    case GET_COUNTRIES_SEARCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        countries: [ ...action.payload ]
      }
    case GET_COUNTRIES_SEARCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case GET_COUNTRY:
      return {
        ...state,
        fetching: true
      }
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        fetching: false,
        detailsCountry: { ...action.payload }
      }
    case GET_COUNTRY_ERROR:
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
