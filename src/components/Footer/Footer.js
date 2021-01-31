import styled, { keyframes } from 'styled-components'
import React, { Component } from 'react'
import colors from '../../styles/colors.js'

import { Link } from 'react-router-dom'

import fb from './icons/facebook.png'
import gh from './icons/github.png'
import li from './icons/linkedin.png'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.footerBackgroundColor};
  border-top: 1px solid #828282;
  display: flex;
  justify-content: space-around;
`
const Image = styled.img`
  width: 5rem;
  height: 5rem;
`

const TextElement = styled.text`
  font-family: Bodoni Moda, serif, Avenir, Arial, Helvetica, sans-serif;
  font-style: cursive;
  font-size: 1.2rem;
  display: flex;
  bottom: 0;
`

const Footer = () => {
  return (
    <Wrapper>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://facebook.com/langmatis'
      >
        <Image src={fb} />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/matiaslang'
      >
        <Image src={gh} />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/langmatias'
      >
        <Image src={li} />
      </a>
      <TextElement>©Matias Lang, 2021</TextElement>
    </Wrapper>
  )
}

export default Footer
