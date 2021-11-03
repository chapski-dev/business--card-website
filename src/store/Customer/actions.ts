import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART} from './types';

export const addToWishList = (payload?: any) => ({
  type: ADD_TO_WISHLIST,
  payload
})

export const removeFromWishList = (payload?: any) => ({
  type: REMOVE_FROM_WISHLIST,
  payload
})
export const addToCart = (payload?: any) => ({
  type: ADD_TO_CART,
  payload
})
export const removeFromCart = (payload?: any) => ({
  type: REMOVE_FROM_CART,
  payload
})
