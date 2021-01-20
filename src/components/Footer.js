import styled, { keyframes } from 'styled-components'
import React, { Component } from 'react'
import colors from '../styles/colors.js'

const Wrapper = styled.div`
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.footerBackgroundColor};
  border-top: 1px solid #828282;
`

const Footer = () => {
  return (
    <Wrapper>
      <h1>FOOOTEEEERERRR</h1>
    </Wrapper>
  )
}

export default Footer
