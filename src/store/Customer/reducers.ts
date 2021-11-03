import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './types';

interface ICustomer {
  wishList: object[];
  cart: object[]
}
// interface ICartType {
// }
// interface IWishList {
// }
// interface IProducts {
// }

const defaultState: ICustomer = {
  wishList: [],
  cart: [],
}

const customer = (state = defaultState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state, 
        wishList: [...state.wishList, action.payload]
      }
    case REMOVE_FROM_WISHLIST:
      // const newWishList = state.wishList.reduce((acc: number[], el) => {
        // return el === action.payload
          // ? acc
          // : [...acc, el];
      // }, [])
      return {
        ...state, 
        // wishList: newWishList
      }
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state, 
        cart: action.payload
      }
    default: 
      return state
  }
}

export default customer;


