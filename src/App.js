import React, { Fragment } from 'react'

import { Router } from '@reach/router'
import { Box } from 'rebass'

import Header from './Header'

const MovieNight = () => (
  <Box px="2" bg="black" color="white">
    Movie night page
  </Box>
)
const Plan = () => (
  <Box px="2" bg="black" color="white">
    Plan page
  </Box>
)

const App = () => (
  <Fragment>
    <Header />
    <main>
      <Router>
        <MovieNight path="/" />
        <Plan path="/plan" />
      </Router>
    </main>
  </Fragment>
)

export default App
