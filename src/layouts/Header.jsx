import React from 'react'

import Title from '@/components/Title'
import ButtonMode from '@/components/ButtonMode'

function Header() {
  return (
    <header className="container-fluid py-4 d-flex justify-content-between align-items-center shadow mb-4">
      <Title />
      <ButtonMode />
    </header>
  )
}

export default Header
