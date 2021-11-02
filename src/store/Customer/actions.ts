import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART} from './types';

export const addToWishList = (id: number) => ({
  type: ADD_TO_WISHLIST,
  payload: id
})

export const removeFromWishList = (id: number) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id
})
export const addToCart = (id: number) => ({
  type: ADD_TO_CART,
  payload: id
})
export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id
})
