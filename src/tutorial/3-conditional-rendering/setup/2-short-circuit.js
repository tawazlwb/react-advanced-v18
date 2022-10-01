import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <div>
      {/* <h2>{firstValue}</h2>
      <h2>value : {secondValue}</h2> */}
      <h2>{text || 'john doe'}</h2>
      <h2>{text && 'john doe'}</h2>
      <h2>{!text && 'hello world'}</h2>
    </div>
  )
}

export default ShortCircuit
