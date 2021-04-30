import {createStore} from 'redux';
import User from "../model/User";
import {storeData} from "../utils/Storage";
import UserResponse from "../model/UserResponse";
import {KEY} from "../utils/Utils";


export interface GlobalState {
  user?: User,
  token?: string
}

const initialState:GlobalState = { };

const ACTION_SET_USER = 'ACTION_SET_USER';
const ACTION_SET_TOKEN = 'ACTION_SET_TOKEN';

const reducer = (state = initialState, action: any) => {

  switch (action.type) {
    case ACTION_SET_USER:
      return {
        user : action.user,
        token : action.token
      };
    case ACTION_SET_TOKEN:
      return {
        token : action.token
      }
  }
  return state;
};

const store = createStore(reducer);
export default store;

export const setUser = (user : User, token : string) => {
  let userResponse : UserResponse = {user, token}
  console.log("UserResponse :", userResponse)
  storeData(KEY.User, userResponse);
  return {
    type : ACTION_SET_USER,
    user,
    token
  }
}

export const setToken = ( token : string) => {
  return {
    type : ACTION_SET_TOKEN,
    token
  }
}