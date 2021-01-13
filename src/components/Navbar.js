/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../styles/Colors'

const Wrapper = styled.section`
  padding: 0.5rem;
  background: ${colors.topBarBackground};
  flex-direction: row-reverse;
  overflow: hidden;
  border-bottom: 1px solid #828282;
  border-bottom-style: outset;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`
const shakeButton = keyframes`
10%, 90% {
  transform: translate3d(-1px, 0, 0);
}

20%, 80% {
  transform: translate3d(2px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}

40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const NameButton = styled.div`
  font-family: East Sea Dokdo;
  font-style: Cursive;
  font-size: 2em;
  margin: 0.5em;
  float: left;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${colors.buttonBackground};
  color: ${colors.buttonTextColor};

  font-size: 1em;
  margin: 1em;
  padding: 0.2em 1.3em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  float: right;
  transition: all 0.1s;

  &:hover {
    transform: translateY(5px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    background: ${colors.buttonTextColor};
    color: ${colors.buttonBackground};
  }
`

class TopBar extends Component {
  render() {
    return (
      <Wrapper>
        <Link to='/contact'>
          <Button>Contact</Button>
        </Link>
        <Link to='/skills'>
          <Button>Skills</Button>
        </Link>
        <Link to='/'>
          <Button primary>Home</Button>
        </Link>
        <Link to='/'>
          <NameButton>Matias Lang</NameButton>
        </Link>
      </Wrapper>
    )
  }
}

export default TopBar
