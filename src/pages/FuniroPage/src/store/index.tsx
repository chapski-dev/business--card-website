import { createStore, combineReducers } from "redux";
import { basketReduser } from './basketReduser';
import { likedReduser } from './likedReduser';


const rootReduser = combineReducers({
  busket: basketReduser,
  liked: likedReduser,
})
export const store = createStore(rootReduser);