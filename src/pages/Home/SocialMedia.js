import React from 'react'
import styled from 'styled-components'
import github from './icons/github.png'
import linkedin from './icons/linkedin.png'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  column-gap: 20px;
  margin: 20px;
  padding-bottom: 70px;
`

const Image = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  opacity: 1;

  &:hover {
    opacity: 0.3;
  }
`

const Middle = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //-ms-transform: translate(-50%, -50%);
`

const SocialMedia = () => {
  return (
    <Wrapper>
      <Grid container justify='center' spacing={2}>
        <a
          href='https://github.com/matiaslang'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={github} alt='Github' />
        </a>
        <a
          href='https://www.linkedin.com/in/langmatias'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={linkedin} alt='linkedin' />
        </a>
      </Grid>
    </Wrapper>
  )
}

export default SocialMedia
