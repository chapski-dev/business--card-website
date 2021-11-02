const defaultState = {
  products: [],
}

const ADD_TO_LIKED = 'ADD_TO_LIKED'
const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKED'

export const likedReduser = (state = defaultState, action: { type: string; payload: number; }) => {
  switch (action.type) {
    case ADD_TO_LIKED:
      return {...state, products: state.products}
    case REMOVE_FROM_LIKED:
      return {...state, products: state.products}
    default: 
      return state
  }
}
