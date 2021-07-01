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
  justify-content: space-between;
`
const Image = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  margin-right: 1.5rem;

  @media (max-width: 440px) {
    width: 3rem;
    height: 3rem;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 375px) {
    width: 3.6rem;
    height: 3.6rem;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 320px) {
    width: 2.7rem;
    height: 2.7rem;
    margin-top: 0.3rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
`
const ImageWrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  //padding: 1rem;
  //position: absolute;
  //float: right;
  display: inline-block;
  //margin: 1rem 2rem;

  @media (max-width: 425px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    //padding: 1rem;
    //position: absolute;
    //float: right;
    display: inline-block;
    //margin: 1rem 2rem;
  }

  @media (max-width: 325px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    //padding: 1rem;
    //position: absolute;
    //float: right;
    display: inline-block;
    //margin: 1rem 2rem;
  }
`

const TextWrapper = styled.div`
  //position: absolute;
  margin-right: 2rem;
  float: right;
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
      <ImageWrapper>
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
      </ImageWrapper>
      <TextWrapper>
        <TextElement>©Matias Lang, 2021</TextElement>
      </TextWrapper>
    </Wrapper>
  )
}

export default Footer
