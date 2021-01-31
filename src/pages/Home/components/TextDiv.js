import React, { useState, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/colors'

import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  text-align: center;
  margin-top: 12rem;
  margin-right: 5rem;
  margin-left: 5rem;

  font-size: 16px;

  justify-content: center;
  padding: 10rem;

  box-shadow: 0px 0px 0px 5px black inset;
  position: fixed;
  //z-index: -0.5;

  @media (max-width: 480px) {
    margin-top: 8.5rem;

    padding: 3rem;
  }
`
const Container = styled.div`
  box-shadow: 0px 0px 0px 2px black inset;
  padding: 5em;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`

const HelloText = styled.h1`
  color: ${colors.buttonTextColor};
  font-family: Dancing Script, Bodoni Moda, serif, Avenir, Arial, Helvetica,
    sans-serif;
  font-style: cursive;
  padding-bottom: 2rem;
  font-size: 5rem;
  //font-size: 2em;
  //margin: 0.5em;
`

const MainText = styled.p`
  color: ${colors.buttonTextColor};
  font-family: Bodoni Moda, serif, Avenir, Arial, Helvetica, sans-serif;
  //font-style: italic;
  font-size: 1.1rem;
  //font-size: 2em;
  //margin: 0.5em;
`

const TextDiv = () => {
  return (
    <Wrapper>
      <Container>
        <HelloText>Hello</HelloText>
        <MainText>
          And welcome to my website. My name is Matias Lang, and it is
          absolutely lovely to have you here. Please, enjoy your stay. If there
          is anything you want to say, please don't hesitate to reach out to me{' '}
          <Link to='/Contact'>here</Link>. This website is a work in progress,
          it will be developed every once in a while.
        </MainText>
      </Container>
    </Wrapper>
  )
}

export default TextDiv
