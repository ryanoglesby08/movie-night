import React, { useState } from 'react'

import { Box, Card, Image, Heading, Text } from 'rebass'
import styled from 'styled-components'

import movieData from '../movies.json'
import WhosWatching from './WhosWatching'

const initialMovieIndex = Math.floor(Math.random() * movieData.movies.length)

const MovieNight = () => {
  const [movieIndex, setMovieIndex] = useState(initialMovieIndex)

  const pickNewRecommendation = () => {
    const randomMovieIndex = Math.floor(Math.random() * movieData.movies.length)
    setMovieIndex(randomMovieIndex)
  }

  return (
    <>
      <Box mb={3}>
        <WhosWatching onRemove={pickNewRecommendation} />
      </Box>
      <Box mb={3}>
        <Filter onChange={pickNewRecommendation} />
        <Genres onChange={pickNewRecommendation} />
      </Box>
      <Recommendation movie={movieData.movies[movieIndex]} />
    </>
  )
}

const Fieldset = styled('fieldset')({
  backgroundColor: 'gray',
})

const Filter = ({ onChange }) => (
  <Fieldset>
    <Text as="label" htmlFor="filter">
      Preferences
    </Text>
    <select id="filter" onChange={onChange} defaultValue="not-seen">
      <option value="not-seen">Something we haven't seen yet</option>
      <option value="want-to-see">Something we really want to see</option>
      <option value="seen">Something we've seen before</option>
    </select>
  </Fieldset>
)

const Genres = ({ onChange }) => (
  <Fieldset>
    <Text as="label" htmlFor="genres">
      Genre
    </Text>
    <select id="genres" onChange={onChange} defaultValue="none">
      <option value="none">-</option>
      <option value="comedy">Comedy</option>
      <option value="action">Action</option>
      <option value="horror">Horror</option>
    </select>
  </Fieldset>
)

const Recommendation = ({ movie }) => (
  <Box>
    <Heading>Tonight, you should watch 👇</Heading>

    <Card p={2} variant="basic">
      <Image src={movie.data.Poster} />
      <Heading>{movie.data.Title}</Heading>
      <Text>{movie.data.Runtime}</Text>
      <Text>{movie.data.imdbRating} rating on IMDB</Text>
    </Card>
  </Box>
)

export default MovieNight
