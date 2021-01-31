import React from 'react'

import styled, { keyframes } from 'styled-components'
import colors from '../../styles/colors'

import text from './texts'

import TextElement from './components/TextElement'
import SideNav from './components/SideNav'
import LetterDiv from './components/LetterDiv'
import TextDiv from './components/TextDiv'

const Wrapper = styled.div`
  font-size: 12px;
  padding: 0.5rem;
  position: relative;
  height: 100%;
  transition: margin 1s;
  background: ${colors.mainBackground};
  display: flex;
  border-top: 1px solid #828282;
  border-bottom-style: outset;
  border-top-style: outset;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`

const TextWrapper = styled.div`
  justify-content: space-between;
  padding: 5rem;
  float: right;
`
const NavigationWrapper = styled.div`
  vertical-align: top;
  flex-direction: column;
  float: left;
  flex: 0.1;
`

const Home = () => {
  return (
    <Wrapper>
      <TextDiv />
      <LetterDiv />
    </Wrapper>
  )
}

export default Home

/*
<TextWrapper>
{text.map((text) => (
  <TextElement header={text.header} text={text.text}></TextElement>
))}
</TextWrapper>
*/
