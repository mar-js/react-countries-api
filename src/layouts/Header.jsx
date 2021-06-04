import React from 'react'

import { Link } from 'react-router-dom'

import Title from '@/components/Title'
import ButtonMode from '@/components/ButtonMode'

function Header() {
  return (
    <header className="container-fluid py-4 d-flex flex-column justify-content-start align-items-center flex-sm-row justify-content-sm-between shadow mb-4">
      <Link className="text-decoration-none text-dark mb-2"
        to="/"
      >
        <Title />
      </Link>
      <ButtonMode />
    </header>
  )
}

export default Header
