import React, { useState } from 'react'

import { Flex, Card, Image, Text, Heading, Button } from 'rebass'

import BareUl from '../BareUl'
import movieData from '../movies.json'

const Plan = () => {
  const [currentMovie, setCurrentMovie] = useState(0)

  if (currentMovie >= movieData.movies.length) {
    return (
      <Text>
        👍 No more movies left to rate. You are ready for movie night.
      </Text>
    )
  }

  return (
    <BareUl>
      {movieData.movies
        .filter((_, index) => index === currentMovie)
        .map(movie => (
          <MovieTile
            key={movie.data.Title}
            movie={movie}
            onNext={() => setCurrentMovie(prevMovie => prevMovie + 1)}
          />
        ))}
    </BareUl>
  )
}

const MovieTile = ({ movie, onNext }) => {
  const [seenIt, setSeenIt] = useState(undefined)
  const [watchAgain, setWatchAgain] = useState(undefined)
  const [watchFirstTime, setWatchFirstTime] = useState(undefined)
  const [interested, setInterested] = useState(undefined)

  return (
    <li>
      <Card p={2} variant="basic">
        <Image src={movie.data.Poster} />
        <Heading>{movie.data.Title}</Heading>
        <Text>Added by: {movie.addedBy}</Text>
      </Card>

      <Flex pt="2">
        <QAndA
          condition={seenIt}
          conditionSetter={setSeenIt}
          yesButtonLabel="Seen it already"
          noButtonLabel="Haven't seen it"
          yesText="Got it, you've seen it"
          noText="Got it, you haven't seen it yet"
        />
      </Flex>

      <Flex pt="2">
        <QAndA
          showIf={seenIt === true}
          condition={watchAgain}
          conditionSetter={setWatchAgain}
          yesButtonLabel="Would watch again"
          noButtonLabel="Once is enough"
          yesText="Cool, you'd watch it again"
          noText="Cool, you don't want to watch it again"
        />
        <QAndA
          showIf={seenIt === false}
          condition={watchFirstTime}
          conditionSetter={setWatchFirstTime}
          yesButtonLabel="I want to watch this"
          noButtonLabel="Not interested"
          yesText="Alright, you want to watch this"
          noText="Alright, you're not into it"
        />
      </Flex>

      <Flex pt="2">
        <QAndA
          showIf={watchAgain === true || watchFirstTime === true}
          condition={interested}
          conditionSetter={setInterested}
          yesButtonLabel="Highly interested"
          noButtonLabel="Indifferent"
          yesText="You can't wait to watch it"
          noText="Not super stoked"
        />
      </Flex>

      <Button bg="white" color="magenta" onClick={onNext}>
        Next →
      </Button>
    </li>
  )
}

const QAndA = ({
  showIf,
  condition,
  conditionSetter,
  yesButtonLabel,
  noButtonLabel,
  yesText,
  noText,
}) => {
  if (!showIf) {
    return null
  }

  if (condition === undefined) {
    return (
      <>
        <Button bg="blue" onClick={() => conditionSetter(true)}>
          {yesButtonLabel}
        </Button>
        <Button bg="magenta" onClick={() => conditionSetter(false)}>
          {noButtonLabel}
        </Button>
      </>
    )
  }

  return <Text>✅ {condition ? yesText : noText}</Text>
}
QAndA.defaultProps = {
  showIf: true,
}

export default Plan
