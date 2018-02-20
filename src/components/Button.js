import React from 'react'
import './button.scss'

export default (props) => {
  return (
    <button className='btn btn-primary'>
      {props.children}
    </button>
  )
}