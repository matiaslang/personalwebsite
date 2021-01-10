/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
  padding: 0.5rem;
  background: papayawhip;
  flex-direction: row-reverse;
  overflow: hidden;
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

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  float: right;
`

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = { animate: false }
  }

  render() {
    return (
      <Wrapper>
        <Link to='/skills'>
          <Button>Skills</Button>
        </Link>
        <Link to='/'>
          <Button>Home</Button>
        </Link>
      </Wrapper>
    )
  }
}

export default TopBar
