import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'

// reducer function
const reducer = (state, action) => {
  // switch (action.type) {
  // }
}

const defaultState = {
  people: data,
  isModalOpen: true,
  modalContent: 'hello world',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name) {
      // setShowModal(true)

      // setPeople((oldPeople) => {
      //   return [
      //     ...oldPeople,
      //     {
      //       id: new Date().getTime().toString(),
      //       name,
      //     },
      //   ]
      // })

      setName('')
    } else {
      // setShowModal(true)
    }
    console.log('submit')
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>submit</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
