/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import colors from '../styles/Colors'
import downArrow from './icons/downA1.png'
import upArrow from './icons/upA1.png'
import { ReactComponent as ML } from './icons/ML1.svg'
import { ReactComponent as HomeButton } from './icons/HomeLogo.svg'

const Wrapper = styled.section`
  //padding: 0.5rem;
  transition: margin 1s;
  background: ${colors.background};
  flex-direction: row-reverse;
  overflow: hidden;
  //border-bottom: 1px solid #828282;
  //border-bottom-style: outset;
  //box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`
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
  overflow: hidden;
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const NameButton = styled.div`
  color: ${colors.buttonTextColor};

  font-family: Bodoni Moda, serif, Avenir, Arial, Helvetica, sans-serif;
  //font-style: italic;
  font-size: 40px;
  font-size: 2em;
  margin: 0.5em;
`

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  display: ${(props) => (props.visible ? 'visible' : 'none')};

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
    background: ${colors.buttonHoverColor};
    color: ${colors.buttonBackground};
  }
`

const OpenButton = styled.button`
  display: ${(props) => (props.visible ? 'none' : 'visible')};

  border-radius: 50%;
  margin: 0.5em;
  transition: color 3s;
  padding: 0.2em;

  &:hover {
    animation: ${shakeButton} 1.3s linear infinite;
  }
`

const MLLogo = styled(ML)`
  height: 4rem;
  width: 4rem;
  //flex: true;
  //position: absolute;
  float: center;
  padding-left: 0.5rem;
  //margin: 0.3 rem;
`
var buttonNames = [
  { path: 'contact', text: 'Reach out to me!' },
  { path: 'skills', text: 'What is my passion?' },
  { path: '', text: 'Who am I?' },
]

const MenuButton = ({ name, text, menuVisible }) => (
  <Link to={name}>
    <Button visible={menuVisible}>{text}</Button>
  </Link>
)

class TopBar extends Component {
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
    return this.state.menuVisible ? (
      <img src={upArrow} alt={'upArrow'} height='20rem' width='20rem' />
    ) : (
      <img src={downArrow} alt={'DownArrow'} height='20rem' width='20rem' />
    )
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <NameButton>MATIAS LANG</NameButton>
          </Link>
        </Wrapper>
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
        >
          <this.icon />
        </OpenButton>
      </div>
    )
  }
}

export default TopBar
