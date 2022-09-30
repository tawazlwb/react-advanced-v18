import React, { useState } from 'react'

const UseStateObject = () => {
  // State
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  const changeMessage = (id) => {
    setMessage('hello world')
  }

  return (
    <>
      <h3 onClick={() => console.log(name)}>{name}</h3>
      <h3 onClick={() => console.log(age)}>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={() => changeMessage()}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
