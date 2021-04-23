//import {signIn, signUp} from './Path';
import {addUser, login} from './Path';
import axios from 'axios';
import UserResponse from "../model/UserResponse";

async function newSignUpUser(
  userEmail: string,
  username: string,
  password: string,
) : Promise<UserResponse>{

  let data = {
    email: userEmail,
    username,
    password
  };
  let result: any;
  try {
    const res = await axios.post(addUser, data);
    console.log('Message : ', res.data);
    return res.data;
  } catch (err) {
    result = err;
    return result;
  }
}

//john@hotmail.fr
//000000
async function newSignInUser(username: string, password: string) {
  let data = {email: username, password};
  let result: any;
  try {
    const res = await axios.post(login, data);
    //console.log('Message : ', res.data);
    return res.data;
  } catch (err) {
    console.log('Erreur :', err.message);
    result = err;
    return result;
  }
}

export {newSignUpUser, newSignInUser};
