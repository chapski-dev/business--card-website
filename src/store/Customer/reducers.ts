import produce from 'immer';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './types';

interface ICustomer {
  wishList: IProduct[];
  cart: IProduct[];
}
// interface ICartType {
// }
// interface IWishList {
// }
type IProduct = {
  id: number;
  title: string;
  newPrice: number;
};

const defaultState: ICustomer = {
  wishList: [],
  cart: [],
};

const customer = (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      // классическая версия добавления элементов
      // return {
      //   ...state,
      //   wishList: [...state.wishList, action.payload]
      // }
      // версия с добавлением иммутабельных обьектов с помощью immer
      return produce(state, (draft: any) => {
        draft.wishList.push(action.payload);
      });
    case REMOVE_FROM_WISHLIST:
      // const newWishList = state.wishList.reduce((acc: number[], el) => {
      // return el === action.payload
      // ? acc
      // : [...acc, el];
      // }, [])
      return {
        ...state,
        // wishList: newWishList
      };
    case ADD_TO_CART:
      return produce(state, (draft: any) => {
        draft.cart.push(action.payload);
      });

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return defaultState;
  }
};

export default customer;
