import React from 'react'
import { ReactComponent as SadFaceSVG } from '../components/sadFace.svg'
import styled, { keyframes } from 'styled-components'
import Colors from '../styles/Colors'

const Wrapper = styled.div`
  background-color: {props => props.colors.background};
`

const NotFoundText = styled.text`
  flex-direction: row-reverse;
`

function NoMatch() {
  return (
    <Wrapper props={Colors}>
      <NotFoundText>
        Sorry, here is nothing for you to see. Are you sure you clicked a proper
        link?
      </NotFoundText>
      <SadFaceSVG />
    </Wrapper>
  )
}
export default NoMatch
