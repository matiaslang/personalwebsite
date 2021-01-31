import React, { Component } from 'react'
import { Transition } from 'react-transition-group'

import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/colors'

const duration = 1000

const sideBarLink = styled.div`
  padding: 1rem;

  &:hover {
    border-right: 1rem solid ${colors.sideBarItem};
    background-color: ${colors.sideBarItemColor};
  }
`

const sidebarStyle = {
  transition: `width ${duration}ms`,
}
const sidebarTransitionStyles = {
  entering: { width: 0 },
  entered: { width: '200px' },
  exiting: { width: '200px' },
  exited: { width: 0 },
}
const linkStyle = {
  transition: `opacity ${duration}ms`,
}

const linkTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
}
export default class SidebarContent extends Component {
  renderLinks = () => {
    return (
      <Transition in={this.props.isOpen} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...linkStyle,
              ...linkTransitionStyles[state],
            }}
          >
            <sideBarLink>Home</sideBarLink>
            <sideBarLink>About</sideBarLink>
            <sideBarLink>Contact</sideBarLink>
          </div>
        )}
      </Transition>
    )
  }

  render() {
    return (
      <Transition in={this.props.isOpen} timeout={duration}>
        {(state) => (
          <div
            className='sidebar'
            style={{
              ...sidebarStyle,
              ...sidebarTransitionStyles[state],
            }}
          >
            {this.renderLinks()}
          </div>
        )}
      </Transition>
    )
  }
}
