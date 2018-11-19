import React from 'react'

import { Router } from '@reach/router'
import { Box } from 'rebass'

import Header from './Header'
import Plan from './Plan/Plan'

const MovieNight = () => <div>Movie night page</div>

const App = () => (
  <>
    <Header />
    <Main>
      <Router>
        <MovieNight path="/" />
        <Plan path="/plan" />
      </Router>
    </Main>
  </>
)

const Main = ({ children }) => (
  <Box as="main" px="2" bg="black" color="white" css={{ height: '100vh' }}>
    {children}
  </Box>
)

export default App
