import React from 'react'
import InfoObject from './InfoObject'

const ObjectList = (props) => {
  return props.list.map((object, index) => (
    <InfoObject question={object[0]} answer={object[1]} id={index} />
  ))
}

export default ObjectList
