import React, { useState } from 'react'

import styled from 'styled-components'
import { Card } from 'rebass'

import BareUl from '../BareUl'

const MovieNight = () => (
  <>
    <WhosWatching />
  </>
)

const WhosWatching = () => {
  const [participants, setParticipants] = useState([
    'Patrick',
    'Sue Ellen',
    'Amanda',
    'Ryan',
    'Emily',
    'Richard',
  ])

  const removeName = (names, nameToRemove) =>
    names.filter(name => name !== nameToRemove)

  return (
    <BareUl inline>
      {participants.map(name => (
        <li key={name}>
          <Participant
            onRemove={() =>
              setParticipants(prevNames => removeName(prevNames, name))
            }
          >
            {name}
          </Participant>
        </li>
      ))}
    </BareUl>
  )
}

const Participant = ({ onRemove, children }) => (
  <Card
    color="white"
    bg="gray"
    px={3}
    py={1}
    borderRadius={9999}
    border="1px solid"
    borderColor="white"
    css={{
      display: 'inline-block',
    }}
  >
    {children} <BareButton onClick={onRemove}>x</BareButton>
  </Card>
)

const BareButton = styled('button')({
  background: 'none',
  color: 'inherit',
  border: 0,
  padding: 0,
  font: 'inherit',
})

export default MovieNight
