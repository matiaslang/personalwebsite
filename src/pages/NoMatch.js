import React from 'react'
import { ReactComponent as SadFaceSVG } from '../components/icons/sadFace.svg'
import styled, { keyframes } from 'styled-components'
import colors from '../styles/colors.js'

const Wrapper = styled.div`
  background-color: {props => props.colors.background};
  display: flex;
  flex-direction: row;
`

const NotFoundText = styled.text``

function NoMatch() {
  return (
    <Wrapper props={colors}>
      <NotFoundText>
        Sorry, here is nothing for you to see. Are you sure you clicked a proper
        link?
      </NotFoundText>
      <SadFaceSVG width='100rem' height='100rem' />
    </Wrapper>
  )
}
export default NoMatch
