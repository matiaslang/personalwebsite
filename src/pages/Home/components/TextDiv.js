import React, { useState, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/colors'

import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  text-align: center;
  margin-top: 6rem;
  margin-right: 5rem;
  margin-left: 5rem;
  height: 60vh;
  //margin: auto;

  font-size: 16px;

  justify-content: center;
  padding: 10rem;

  box-shadow: 0px 0px 0px 5px black inset;
  position: fixed;
  //z-index: -0.5;

  @media (max-width: 440px) {
    margin-top: 6rem;
    margin-right: 2rem;
    margin-left: 2rem;
    padding: 1.5rem;
    height: 65vh;
  }

  @media (max-width: 414) {
    margin-top: 6rem;
    margin-right: 2rem;
    margin-left: 2rem;
    padding: 1.5rem;
    height: 90vh;
  }
  @media (max-width: 320px) {
    margin-top: 6rem;
    margin-right: 2rem;
    margin-left: 2rem;
    padding: 1.5rem;
    height: 65vh;
  }
`
const Container = styled.div`
  box-shadow: 0px 0px 0px 2px black inset;
  padding: 5em;
  height: 50vh;
  justify-content: center;

  @media (max-width: 480px) {
    margin-right: 1rem;
    margin-left: 1rem;
    padding: 1rem;
    height: 60vh;
  }
  @media (max-width: 414px) {
    margin-right: 1rem;
    margin-left: 1rem;
    padding: 1rem;
    height: 65vh;
  }

  @media (max-width: 320px) {
    margin-right: 1rem;
    margin-left: 1rem;
    padding: 1rem;
    height: 60vh;
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

  @media (max-width: 440px) {
    font-size: 5rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 4rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
    padding-bottom: 0.7rem;
  }
`

const MainText = styled.p`
  color: ${colors.buttonTextColor};
  font-family: Bodoni Moda, serif, Avenir, Arial, Helvetica, sans-serif;
  //font-style: italic;
  font-size: 1.1rem;
  padding-bottom: 2rem;
  //font-size: 2em;
  //margin: 0.5em;

  @media (max-width: 440px) {
    font-size: 1.3rem;
  }

  @media (max-width: 375px) {
    font-size: 1.3rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`

const Signature = styled.p`
  text-align: right;
`

const TextDiv = () => {
  return (
    <Wrapper>
      <Container>
        <HelloText>Hello</HelloText>
        <MainText>
          And welcome to my website. My name is Matias Lang, and it is
          absolutely great to have you here. I have built and designed this
          website from scratch, so please, enjoy your stay. If there is anything
          you want to say, or comment, please don't hesitate to reach out to me{' '}
          <Link to='/Contact'>here</Link>. Please notice that this website is
          still a work in progress and it will be developed every once in a
          while.
        </MainText>
        <Signature>- Matu</Signature>
      </Container>
    </Wrapper>
  )
}

export default TextDiv
