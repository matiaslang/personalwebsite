import React from 'react'
import { ReactComponent as DA } from '../../../components/icons/downA1.svg'
import { ReactComponent as UA } from '../../../components/icons/upA1.svg'

const SidebarIcon = ({ handleClick, isOpen }) => {
  return <span onClick={handleClick}>{isOpen ? <UA /> : <DA />}</span>
}
export default SidebarIcon
