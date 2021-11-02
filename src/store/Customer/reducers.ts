import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './types';

interface ICustomer {
  wishList: number[];
  cart: object;
  products: object;
}
interface ICartType {
  
}
interface IWishList {
  
}

const defaultState: ICustomer = {
  wishList: [],
  products: [],
  cart: {
    products: []
  }
}

const customer = (state = defaultState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state, 
        wishList: [...state.wishList, action.payload]
      }
    case REMOVE_FROM_WISHLIST:
      const newWishList = state.wishList.reduce((acc: number[], el) => {
        return el === action.payload
          ? acc
          : [...acc, el];
      }, [])

      return {
        ...state, 
        wishList: newWishList
      }
      case ADD_TO_CART:
        return {
          ...state,
          cart: {
            ...state.cart,
            // products: [...state.cart.products, action.payload]
          }
        };
  
      case REMOVE_FROM_CART:
        return {
          ...state, 
          products: action.payload
        }
    default: 
      return state
  }
}

export default customer;


