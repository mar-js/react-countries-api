import React from 'react'

import { getCountries } from '@/redux/actions'

import { Link } from 'react-router-dom'

import Title from '@/components/Title'
import ButtonMode from '@/components/ButtonMode'

import { connect } from 'react-redux'

function Header({ getCountries }) {
  return (
    <header className="container-fluid py-4 d-flex flex-column justify-content-start align-items-center flex-sm-row justify-content-sm-between shadow mb-4">
      <Link className="text-decoration-none text-dark mb-2"
        to="/"
        onClick={ () => getCountries() }
      >
        <Title />
      </Link>
      <ButtonMode />
    </header>
  )
}

const MAP_DISPATCH_TO_PROPS = { getCountries }

export default connect(null, MAP_DISPATCH_TO_PROPS)(Header)
