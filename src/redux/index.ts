import {createStore} from 'redux';
import User from "../model/User";

interface GlobalState {
  user?: User,
  token?: string
}

const initialState:GlobalState = { };

const ACTION_SET_USER = 'ACTION_SET_USER';

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_SET_USER:
      return {
        user : action.user,
        token : action.token
      }
  }
  return state;
};

const store = createStore(reducer);
export default store;

export const setUser = (user : User, token : string) => {
  return {
    type : ACTION_SET_USER,
    user,
    token
  }
}