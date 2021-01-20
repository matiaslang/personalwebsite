/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import colors from '../styles/colors.js'

import { ReactComponent as UA } from './icons/upA1.svg'
import { ReactComponent as DA } from './icons/downA1.svg'

var buttonNames = [
  { path: 'contact', text: 'Reach out to me!' },
  { path: 'skills', text: 'What is my passion?' },
  { path: '', text: 'Who am I?' },
]

const OpenButtonContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: ${colors.background};
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  display: ${(props) => (props.visible ? 'visible' : 'none')};

  background: ${colors.buttonBackground};
  color: ${colors.buttonTextColor};
  font-size: 1em;
  margin: 0.5em;
  padding: 0.2em 1.3em;
  position: sticky;
  border: 2px solid ${colors.buttonBorderColor};
  border-radius: 30px;
  //float: right;
  transition: all 0.1s;

  &:hover {
    transform: translateY(5px);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    background: ${colors.buttonHoverColor};
    color: ${colors.buttonBackground};
  }
`
const shakeButton = keyframes`
10%, 90% {
  transform: translate3d(0, -1px, 0);
}

20%, 80% {
  transform: translate3d(0, 2px, 0);
}

30%, 50%, 70% {
  transform: translate3d(0, -4px, 0);
}

40%, 60% {
  transform: translate3d(0, 4px, 0);
}
`

const OpenButton = styled.button`
  z-index: 1;
  position: absolute;
  //margin-top: 3rem;
  top: ${(props) => (props.visible ? '6rem' : '3rem')};
  right: 51%;
  left: 49%;

  //top: 3rem;
  display: inline;
  border-style: none;
  background-color: transparent;
  //text-align: center;
  height: 2rem;
  width: 2rem;
  //margin: 0.5em;
  transition: color 3s;
  //padding: 0.2em;

  &:hover {
    animation: ${shakeButton} 1.3s ease infinite;
  }
`

const MenuButton = ({ name, text, menuVisible }) => (
  <Link to={name}>
    <Button visible={menuVisible}>{text}</Button>
  </Link>
)
const variants = {
  visible: { opacity: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0 },
}

const ButtonWrapper = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants,
}))`
  //border-bottom: ${(props) => (props.visible ? '1px solid #828282' : '')};
  //display: flex;
  //flex-direction: row;
  //overflow: hidden;
`

class NavButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.icon = this.icon.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        contentLoad: true,
      })
    }, 2500)
  }

  handleClick = () => {
    this.setState((state) => ({ menuVisible: !state.menuVisible }))
  }

  icon = () => {
    return this.state.menuVisible ? <UA /> : <DA />
  }

  render() {
    return (
      <OpenButtonContainer>
        <ButtonWrapper
          animate={this.state.menuVisible ? 'visible' : 'hidden'}
          visible={this.state.menuVisible}
        >
          {buttonNames.map((value, index) => (
            <MenuButton
              name={value.path}
              text={value.text}
              menuVisible={this.state.menuVisible}
            ></MenuButton>
          ))}
        </ButtonWrapper>
        <OpenButton
          onClick={() => this.handleClick()}
          animate={{ scale: 0.5 }}
          transition={{ duration: 2 }}
          visible={this.state.menuVisible}
        >
          <this.icon />
        </OpenButton>
      </OpenButtonContainer>
    )
  }
}

export default NavButton
