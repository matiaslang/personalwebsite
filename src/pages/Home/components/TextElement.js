import React from 'react'

import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/colors'

const Wrapper = styled.div`
  padding: 0.5rem;
  //height: 5rem;
  transition: margin 1s;
  background: ${colors.mainBackground};
  border-top: 1px solid #828282;
  border-bottom-style: outset;
  border-top-style: outset;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`

const Header = styled.h3``

const Text = styled.text``

const TextElement = (props) => {
  return (
    <Wrapper>
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
    </Wrapper>
  )
}

export default TextElement
