import React from 'react'

import Loading from './Loading'

import Country from './Country'

import { connect } from 'react-redux'

function Countries({ fetching, countries }) {
  if (fetching) return <Loading />

  return (
    <div className="row justify-content-center align-items-center">
      { countries.map(country => (
        <Country
          key={ country.name }
          data={ country }
        />
      )) }
    </div>
  )
}

const MAP_STATE_TO_PROPS = ({ fetching, countries }) => ({
  fetching,
  countries
})

export default connect(MAP_STATE_TO_PROPS, null)(Countries)
