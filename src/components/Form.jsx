import React, { useState } from 'react'

import { getCountriesSearch, getCountries } from '@/redux/actions'

import { connect } from 'react-redux'

function Form({ search, filter, getCountriesSearch, getCountries }) {
  const [ country, setCountry ] = useState(search)

  const HANDLE_FORM = event => {
    event.preventDefault()
    getCountriesSearch(country)
    setCountry('')
  }

  return (
    <div className="row justify-content-md-between align-items-center mb-4">
      <div className="col-12 col-md-5">
        <form
          onSubmit={ HANDLE_FORM }
        >
          <div className="input-group align-items-center">
            <input className="form-control my-4 border-end-0 "
              type="text"
              name="country"
              placeholder="Search for a country..."
              required
              value={ country }
              onChange={ ({ target: { value } }) => setCountry(value) }
            />
            <button className="input-group-text h-100 bg-white border-start-0 "
              type="submit"
            >
              <i className="bi bi-search" />
            </button>
          </div>
        </form>
      </div>
      <div className="col-12 col-md-3">
        <div className="dropdown">
          <button id="dropdownMenuButton1" className="btn btn-light dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter Region
          </button>
          <ul className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
          >
            { filter.map(r => (
              <li className="dropdown-item text-capitalize"
                role="button"
                key={ r }
                data-region={ r }
                onClick={ ({ target: { dataset: { region } } }) => getCountries(region) }
              >{ r }</li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  )
}

const MAP_STATE_TO_PROPS = ({ search, filter }) => ({
  search,
  filter
})

const MAP_DISPATCH_TO_PROPS = { getCountriesSearch,
  getCountries }

export default connect(MAP_STATE_TO_PROPS, MAP_DISPATCH_TO_PROPS)(Form)
