import React from 'react'

const ErrorMessage = props => {
  return (
    <div className='text-left text-red-500'>
        {props.children}
    </div>
  )
}

export default ErrorMessage