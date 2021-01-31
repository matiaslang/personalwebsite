import React, { useState, useRef } from 'react'

import styled, { keyframes } from 'styled-components'
import colors from '../../../styles/colors'

import watermark from '../pictures/watermark.png'

const Wrapper = styled.div`
  //text-align: center;
  //height: 100%;
  //margin-top: 12rem;
  font-size: 0px;
  display: flex;
  justify-content: center;
  //align-items: center;
`
const UpperOpeningDiv = styled.div`
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 50% 100%, 0 90%);
  position: fixed;
  transform: translateY(${({ animate }) => (animate ? '0' : '-100vw')});
  transition: transform 1s;
  height: 48.5%;
  //width: 100%;
  left: 0;
  right: 0;
  background-color: ${colors.LetterBackground};

  &:before {
    top: -20%;
    clip-path: polygon(0 0, 100% 0%, 100% 90%, 50% 100%, 0 90%);
    background: red;
    position: absolute;
    transform: translateY(${({ animate }) => (animate ? '0' : '-100vw')});
    transition: transform 1s;
    display: block;
    height: 60%;
    width: 110%;
    left: 0;
    background-color: ${colors.LetterBackground};
  }
`
const LowerOpeningDiv = styled(UpperOpeningDiv)`
  clip-path: polygon(0 10%, 50% 0, 100% 10%, 100% 100%, 0% 100%);
  transform: translateY(${({ animate }) => (animate ? '0' : '100vw')});

  bottom: 0;
  left: 0;
`

const WatermarkImage = styled.img`
  transform: translateY(${({ animate }) => (animate ? '0' : '-100vw')});
  transition: transform 1s;

  position: absolute;
  //bottom: 50%;
  top: 36%;
  left: 0;
  right: 0;
  //vertical-align: bottom;
  display: block;
  margin: auto;
  width: 15rem;
  height: 15rem;
`

const LetterDiv = () => {
  const ourRef = useRef(null)
  const anotherRef = useRef(null)
  const [show, doShow] = useState(true)

  React.useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top
    const getHeight = (element) => element.offsetHeight
    const div1Pos = topPos(ourRef.current)
    const div1Height = getHeight(ourRef.current)
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      if (div1Pos >= window.scrollY) {
        doShow(true)
      } else if (div1Pos < scrollPosition) {
        doShow(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Wrapper ref={ourRef}>
      <UpperOpeningDiv animate={show} />
      <LowerOpeningDiv animate={show} />
      <WatermarkImage src={watermark} animate={show} />
    </Wrapper>
  )
}

export default LetterDiv
