import React from 'react'

import { getCountries } from '@/redux/actions'

import { connect } from 'react-redux'

function Form({ filter, getCountries }) {
  return (
    <form className="row justify-content-md-between align-items-center mb-4">
      <div className="col-12 col-md-5">
        <div className="input-group align-items-center">
          <span className="input-group-text h-100 bg-white border-end-0 ">
            <i className="bi bi-search" />
          </span>
          <input className="form-control my-4 border-start-0 "
            type="text"
            name="country"
            value="aaaa"
            placeholder="Search for a country..."
          />
        </div>
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
    </form>
  )
}

const MAP_STATE_TO_PROPS = ({ filter }) => ({ filter })

const MAP_DISPATCH_TO_PROPS = { getCountries }

export default connect(MAP_STATE_TO_PROPS, MAP_DISPATCH_TO_PROPS)(Form)
