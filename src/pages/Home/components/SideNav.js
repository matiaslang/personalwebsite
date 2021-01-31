import React, { useState } from 'react'

import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/colors'

import SidebarIcon from './SidebarIcon'
import SidebarContent from './SidebarContent'

const Wrapper = styled.div``

const SideBarIconWrapper = styled.div``

const SideBarLink = styled.button`
  padding: 1rem;

  &:hover {
    border-right: 1rem solid ${colors.sideBarItem};
    background-color: ${colors.sideBarItemColor};
  }
`

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <SidebarContent isOpen={isOpen} />
      <SideBarIconWrapper>
        <SidebarIcon
          isOpen={isOpen}
          handleClick={() => {
            toggleSidebar()
          }}
        />
      </SideBarIconWrapper>
    </Wrapper>
  )
}

export default SideNav
