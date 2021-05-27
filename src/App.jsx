import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Header from '@/layouts/Header'

import Home from '@/pages/Home'
import Country from '@/pages/Country'

// import Footer from '@/layouts/Footer'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={ Home } />

          <Route exact path="/:id" component={ Country } />
        </Switch>

        { /* <Footer /> */ }
      </BrowserRouter>
    </Fragment>
  )
}

export default App
