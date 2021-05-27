import React from 'react'

function Form() {
  return (
    <form className="row justify-md-content-between align-items-center mb-4">
      <div className="col-12 col-md-10">
        <div className="input-group align-items-center">
          <span className="input-group-text h-100 bg-white border-end-0 ">
            <i className="bi bi-search" />
          </span>
          <input className="form-control my-4 border-start-0 "
            type="text"
            name="country"
            value=""
            placeholder="Search for a country..."
          />
        </div>
      </div>
      <div className="col-12 col-md-2">
        <select className="form-select">
          <option defaultValue>Filter by Region</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </form>
  )
}

export default Form
