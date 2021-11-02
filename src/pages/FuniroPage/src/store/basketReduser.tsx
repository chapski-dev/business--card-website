

const defaultState = {
  products: [],
}

const ADD_TO_BUSCET = 'ADD_TO_BUSCET'
const REMOVE_FROM_BUSCET = 'REMOVE_FROM_BUSCET'

export const basketReduser = (state = defaultState, action: { type: string; payload: object; }) => {
  switch (action.type) {
    case ADD_TO_BUSCET:
      // return {...state, products: state.products.push(action.payload)}
    case REMOVE_FROM_BUSCET:
      return {...state, products: state.products}
    default: 
      return state
  }
}