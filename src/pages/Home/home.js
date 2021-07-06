import React, { Fragment } from 'react'
import texts from './texts.json'
import array from './array.json'
import styled from 'styled-components'
import InfoObject from './InfoObject'
import ObjectList from './ObjectList'
import SocialMedia from './SocialMedia'
import PersistentDrawerLeft from '../../components/Menudrawer'

const Wrapper = styled.div`
  background-color: papayawhip;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 101vh;
`

const Home = () => {
  return (
    <Wrapper>
      <PersistentDrawerLeft />
      <ObjectList list={array} />
      <SocialMedia />
    </Wrapper>
  )
}

export default Home
