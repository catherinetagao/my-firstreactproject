import React from 'react'

const MyButton = ({className, btnName}) => {
  return (
    // <div>MyButton</div>
    <button className={className}>{btnName}</button>
  )
}

export default MyButton