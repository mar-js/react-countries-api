import React from 'react'

import { Link } from 'react-router-dom'

import funDecimalPoint from '@/tools/funDecimalPoint'

function Country({ data }) {
  const {
    flag,
    name,
    population,
    region,
    capital
  } = data

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 bg-white"
      style={ { height: 24 + 'rem' } }
    >
      <Link className="text-decoration-none"
        to={ name.toLocaleLowerCase().split(' ').join('%20') }
      >
        <div className="card w-100 h-100">
          <img className="card-img-top"
            style={ {
              height: 50 + '%',
              objectFit: 'cover'
            } }
            src={ flag }
            alt={ name }
          />
          <div className="card-body text-dark"
            style={ { height: 50 + '%' } }
          >
            <h5 className="card-title fs-4 text-center mb-2 overflow-hidden"
              style={ {
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              } }
            >{ name }</h5>
            <p className="card-text fs-6">
              <b>Population:</b> { funDecimalPoint(population) }
            </p>
            <p className="card-text fs-6">
              <b>Region:</b> { region }
            </p>
            <p className="card-text fs-6">
              <b>Capital:</b> { capital }
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Country
