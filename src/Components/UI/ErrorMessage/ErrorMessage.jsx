import React from 'react'

const ErrorMessage = props => {
  return (
    <div className='block color-red-500'>
        {props.children}
    </div>
  )
}

export default ErrorMessage