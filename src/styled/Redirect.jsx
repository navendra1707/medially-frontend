import React from 'react'

const Redirect = ({isDoctor, redirect, stay}) => {
  return (
    isDoctor ? stay : redirect
  )
}

export default Redirect