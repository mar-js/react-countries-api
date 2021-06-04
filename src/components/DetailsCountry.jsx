import React from 'react'

import Loading from './Loading'

import funDecimalPoint from '@/tools/funDecimalPoint'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

function DetailsCountry({ fetching, detailsCountry: { details, borders } }) {
  if (!details && !borders || fetching) return <Loading />

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = details

  return (
    <div className="row">
      <div className="col-12 col-md-6 p-4"
        style={ { height: 25 + 'rem' } }
      >
        <img className="img-fluid h-100"
          src={ flag }
          alt={ name }
        />
      </div>
      <div className="col-12 col-md-6 p-4">
        <h3 className="fs-3">{ name }</h3>
        <div className="row h-100">
          <div className="col-12 col-md-6 py-2">
            <p className="fs-6">
              <b>Native Name: </b> { nativeName }
            </p>
            <p className="fs-6">
              <b>Population: </b> { funDecimalPoint(population) }
            </p>
            <p className="fs-6">
              <b>Region: </b> { region }
            </p>
            <p className="fs-6">
              <b>Sub Region: </b> { subregion }
            </p>
            <p className="fs-6">
              <b>Capital: </b> { capital }
            </p>
          </div>
          <div className="col-12 col-md-6 py-2">
            <p className="fs-6">
              <b>Top Level Domain: </b>
              { topLevelDomain.map(domain => domain)
                .join(', ') }
            </p>
            <p className="fs-6">
              <b>Currencies: </b>
              { currencies.map(({ symbol }) => symbol)
                .join(', ') }
            </p>
            <p className="fs-6">
              <b>Lenguages: </b>
              { languages.map(({ name }) => name)
                .join(', ') }
            </p>
          </div>
          { borders.length !== 0 && (
            <div className="col-12 py-2">
              <b>Borders Countries</b>
              <ul className="list-unstyled row">
                { borders.map(({ name }) => (
                  <li className="fs-6 col-12 col-sm-6 col-md-4 col-lg-3 my-2"
                    key={ name.toLocaleLowerCase() }
                  >
                    <Link className="text-decoration-none btn btn-light overflow-hidden w-100"
                      to={ '/' + name.toLocaleLowerCase() }
                      style={ {
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis'
                      } }
                    >
                      { name }
                    </Link>
                  </li>
                )) }
              </ul>
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}

const MAP_STATE_TO_PROPS = ({ fetching, detailsCountry }) => ({
  fetching,
  detailsCountry
})

export default connect(MAP_STATE_TO_PROPS, null)(DetailsCountry)
