import styled from 'styled-components'

const BareUl = styled('ul')(props => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  '> li': props.inline ? { display: 'inline-block' } : undefined,
}))

export default BareUl
