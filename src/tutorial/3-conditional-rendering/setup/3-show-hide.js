import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  return (
    <div>
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </div>
  )
}

export default ShowHide
