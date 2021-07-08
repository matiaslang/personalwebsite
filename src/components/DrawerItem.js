import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import AccessibilityIcon from '@material-ui/icons/Accessibility'
import CodeIcon from '@material-ui/icons/Code'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Grid from '@material-ui/core/Grid'

const Wrapper = styled.div`
  padding: 20px;
  margin: 10px;
`

const UnitImage = styled.div``

const UnitText = styled.text``

const UnitDiv = styled.div``

const iconNames = [
  <AccessibilityIcon />,
  <CodeIcon />,
  <BusinessCenterIcon />,
  <HelpOutlineIcon />,
]

const DrawerItem = ({ label, num, func }) => {
  const link = '/#InfoObject' + num
  return (
    <Wrapper>
      <Link smooth to={link} onClick={func}>
        <Grid container justify='center' spacing={1}>
          <UnitImage>{iconNames[num]}</UnitImage>
          <UnitText>{label}</UnitText>
        </Grid>
      </Link>
    </Wrapper>
  )
}

export default DrawerItem
