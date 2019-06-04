import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Ul = ({children}) => {
  return <UlStyled> {children} </UlStyled>
}

Ul.propTypes = {
  children: PropTypes.node
}

export default Ul

export const UlStyled = styled.ul`
  list-style-position: outside;
  list-style-type: disc;
  padding-left: 20px;
  li {
    line-height: 1.8em;
    margin-bottom: 0;
  }
`
