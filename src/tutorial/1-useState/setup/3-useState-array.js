import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  // State
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        clear item
      </button>
    </>
  )
}

export default UseStateArray
