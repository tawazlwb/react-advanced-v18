import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user) => {
        setUser(user)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

export default MultipleReturns
