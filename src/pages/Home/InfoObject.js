import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 5px solid red;
  margin: 20px;
  padding: 450px;
`

const Question = styled.h1``

const Response = styled.p``

const InfoObject = (props) => {
  return (
    <Wrapper id={'InfoObject' + props.id}>
      <Question>{props.question}</Question>
      <Response>{props.answer}</Response>
    </Wrapper>
  )
}

export default InfoObject
