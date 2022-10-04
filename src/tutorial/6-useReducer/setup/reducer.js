// reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PEOPLE':
      const newPeople = [...state.people, action.payload]

      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'people added',
      }
    case 'REMOVE_PEOPLE':
      const people = state.people.filter(
        (person) => person.id !== action.payload
      )

      return {
        ...state,
        people: people,
        isModalOpen: true,
        modalContent: 'people removed',
      }
    case 'NO_VALUE':
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'please enter value',
      }

    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
        modalContent: '',
      }
    default:
      throw new Error('no matching action type')
  }
}
