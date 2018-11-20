import React from 'react'
import PropTypes from 'prop-types'

import { Router, Link as RouterLink } from '@reach/router'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

const Header = () => (
  <header>
    <Router>
      <NavLinks path="/" active="movie-night" />
      <NavLinks path="/plan" active="plan" />
    </Router>
  </header>
)

const NavLinks = ({ active }) => (
  <nav>
    <Flex bg="white">
      <NavLink to="/plan" active={active === 'plan'}>
        📒 Plan
      </NavLink>
      <NavLink to="/" active={active === 'movie-night'}>
        🍿 It's movie night
      </NavLink>
    </Flex>
  </nav>
)
NavLinks.propTypes = {
  active: PropTypes.oneOf(['movie-night', 'plan']).isRequired,
}

const BareLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 'bold',
  display: 'flex',
})

const NavLink = ({ active, children, ...rest }) => (
  <BareLink {...rest}>
    <Box
      as="span"
      p={3}
      bg={active ? 'black' : undefined}
      color={active ? 'magenta' : 'black'}
    >
      {children}
    </Box>
  </BareLink>
)
NavLink.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default Header
