import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import CheckBox from './checkbox'

const Wrapper = styled.div`
  background-color: papayawhip;
  margin: 3rem 1rem 6rem 1rem;
  height: 100vh;
  padding: 1rem;
`

const InnerWrapper = styled.div`
  border: 5px solid red;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DescriptionText = styled.h3`
  text-align: center;
  padding: 0 10% 3% 10%;
  font-size: 1rem;
`
const Name = styled(DescriptionText)`
  padding: 0 10% 20% 10%;
`

const ContactWrapper = styled.div`
  flex-direction: row;
  //justify-content: initial;
  padding: 10px;
  margin: auto;
`

const Contact = (props) => {
  const [privateInfo, setPrivateInfo] = useState(false)
  const [publicInfo, setPublicInfo] = useState(false)
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    console.log(privateInfo)
    console.log(publicInfo)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e.state)
  }

  return (
    <Wrapper>
      <InnerWrapper>
        <DescriptionText>
          Hi! Here you can submit a message for me. You can either choose to
          send it as a public message, so that will be visible for everyone, or
          you can send it anonymously just for me. If you send it anonymously,
          please remember to include your contact information, so I can get back
          to you.
        </DescriptionText>
        <Name>- Matias</Name>
        <form autoComplete='off' onSubmit={submitHandler}>
          <TextField id='name' label='Your name' required={true} />
          <ContactWrapper>
            <TextField id='number' label='Your e-mail address' />
            <TextField id='email' label='Your phone number' />
          </ContactWrapper>
          <CheckBox
            privateState={privateInfo}
            setPrivateInfo={setPrivateInfo}
            publicState={publicInfo}
            setPublicInfo={setPublicInfo}
          />
          <input type='submit' value='Submit' />
        </form>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Contact
