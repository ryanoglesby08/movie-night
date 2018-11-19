import React, { Fragment } from 'react'

import { Match, Link as RouterLink } from '@reach/router'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

const Header = () => (
  <header>
    <nav>
      <Flex px={2} bg="white" alignItems="center">
        <Match path="/plan">
          {({ match }) => {
            if (!match) {
              return null
            }

            return (
              <Fragment>
                <NavLink to="/plan" active>
                  Plan
                </NavLink>
                <NavLink to="/">It's movie night</NavLink>
              </Fragment>
            )
          }}
        </Match>

        <Match path="/">
          {({ match }) => {
            if (!match) {
              return null
            }

            return (
              <Fragment>
                <NavLink to="/plan">Plan</NavLink>
                <NavLink to="/" active>
                  It's movie night
                </NavLink>
              </Fragment>
            )
          }}
        </Match>
      </Flex>
    </nav>
  </header>
)

const BareLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 'bold',
})

const NavLink = ({ active, ...rest }) => (
  <Box
    p={3}
    bg={active ? 'black' : 'white'}
    color={active ? 'magenta' : 'black'}
  >
    <BareLink {...rest} />
  </Box>
)

export default Header
