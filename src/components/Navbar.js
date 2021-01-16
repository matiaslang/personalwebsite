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

const ButtonWrapper = styled.section`
  border-bottom: 1px solid #828282;
  flex-direction: row;
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

const NameButton = styled.div`
  font-family: Avenir, Arial, Helvetica, sans-serif
  font-size: 40px;
  font-size: 2em;
  margin: 0.5em;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  visibility: ${(props) => props.visible} ? hidden : visible;
  display: ${(props) => props.visible} ? none : visible;

  background: ${colors.buttonBackground};
  color: ${colors.buttonTextColor};


  font-size: 1em;
  margin: 0.5em;
  padding: 0.2em 1.3em;
  border: 2px solid ${colors.buttonBorderColor};
  border-radius: 30px;
  //float: right;
  transition: all 0.1s;

  &:hover {
    transform: translateY(5px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    background: ${colors.buttonTextColor};
    color: ${colors.buttonBackground};
  }
`

const OpenButton = styled(Button)``

class TopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState((state) => ({ menuVisible: !state.menuVisible }))
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Link to='/'>
            <NameButton visible={this.state.menuVisible}>
              {' '}
              Matias Lang
            </NameButton>
          </Link>
        </Wrapper>
        <ButtonWrapper>
          <Button open onClick={() => this.handleClick()}>
            PAINA TÄSTÄ
          </Button>
          <Link to='/contact'>
            <Button visible={this.state.menuVisible}>Reach out to me!</Button>
          </Link>
          <Link to='/skills'>
            <Button visible={this.state.menuVisible}>
              What is my passion?
            </Button>
          </Link>
          <Link to='/'>
            <Button visible={this.state.menuVisible}>Who am I?</Button>
          </Link>
        </ButtonWrapper>
      </div>
    )
  }
}

export default TopBar
