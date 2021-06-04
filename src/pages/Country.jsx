import React, { useEffect } from 'react'

import { getCountry } from '@/redux/actions/'

import Section from '@/layouts/Section'
import DetailsCountry from '@/components/DetailsCountry'

import { connect } from 'react-redux'

function Country({ match: { params: { country } }, getCountry }) {
  useEffect(() => {
    getCountry(country)
  }, [ country ])

  return (
    <Section>
      <DetailsCountry />
    </Section>
  )
}

const STATE_TO_DISPATCH_PROPS = { getCountry }

export default connect(null, STATE_TO_DISPATCH_PROPS)(Country)
