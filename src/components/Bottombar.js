import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: lemonchiffon;
  text-align: right;
  padding-right: 20px;
`

const Bottombar = () => {
  return (
    <Wrapper>
      <p>© Matias Lang 2021</p>
    </Wrapper>
  )
}

export default Bottombar
