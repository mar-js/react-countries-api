export function getCountries() {
  return async function (dispatch, getState) {
    dispatch({ type: 'GET_COUNTRIES' })

    try {
      const RESPONSE = await fetch('https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital;alpha2Code')
      const DATA = await RESPONSE.json()

      dispatch({
        type: 'GET_COUNTRIES_SUCCESS',
        payload: [ ...DATA ]
      })

    } catch (error) {
      console.error(error)

      dispatch({
        type: 'GET_COUNTRIES_ERROR',
        payload: error.message
      })

    }
  }
}

export function getCountry(name) {
  return async function (dispatch, getState) {
    dispatch({ type: 'GET_COUNTRY' })

    try {
      const RESPONSE = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true&fields=name;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag;nativeName`)
      const DATA = await RESPONSE.json()

      if (DATA[0].borders && DATA[0].borders.length !== 0) {
        const RESPONSE = await fetch(`https://restcountries.eu/rest/v2/alpha/?codes=${DATA[0].borders.join(';')}&fields=name`)
        const BORDERS = await RESPONSE.json()

        dispatch({
          type: 'GET_COUNTRY_SUCCESS',
          payload: {
            details: { ...DATA[0] },
            borders: [ ...BORDERS ]
          }
        })
      }

    } catch (error) {
      console.error(error)

      dispatch({
        type: 'GET_COUNTRY_ERROR',
        payload: error.message
      })

    }
  }
}
