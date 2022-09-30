import React, { useState } from 'react'

const ErrorExample = () => {
  // Constant
  const initialTitle = 'random people'
  const text = 'hello world'

  // State
  const [title, setTitle] = useState('random people')

  const handleClick = () => {
    const newTitle = title === initialTitle ? text : initialTitle
    setTitle(newTitle)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
