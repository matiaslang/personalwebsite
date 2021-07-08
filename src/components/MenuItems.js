import React from 'react'
import styled from 'styled-components'
import DrawerItem from './DrawerItem'

const Wrapper = styled.div``

const MenuItems = ({ closeDrawer }) => {
  const items = ['WHAT', 'WHO', 'HOW', 'WHERE']
  return items.map((item, index) => (
    <Wrapper>
      <DrawerItem label={item} num={index} func={closeDrawer}></DrawerItem>
    </Wrapper>
  ))
}
export default MenuItems
