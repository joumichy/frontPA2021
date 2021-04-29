import {invite, signIn, signUp} from './Path';
import axios from 'axios';
import UserResponse from "../model/UserResponse";


async function newSignUpUser(
  email: string,
  firstName: string,
  lastName : string,
  password: string,
  password2: string,
) : Promise<UserResponse>{

  let data = {
    email,
    firstName,
    lastName,
    password,
    password2
  };
  let result: any;
  try {
    const res = await axios.post(signUp, data);
    console.log('Message : ', res.data);
    return res.data;
  } catch (err) {
    result = err;
    return result;
  }
}


async function newSignInUser(username: string, password: string) {
  let data = {email: username, password};
  let result: any;
  try {
    const res = await axios.post(signIn, data,{});
    //console.log('Message : ', res.data);
    return res.data;
  } catch (err) {
    console.log('Erreur :', err.message);
    result = err;
    return result;
  }
}

async function inviteUser(email: string, token: unknown){
  let data = {email}
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }
  try{
    const res = await axios.post(invite, data, {headers} );
    return res.data;
  }catch (err){
    console.log("Erreur : ", err.message);
    return err;
  }
}

export {newSignUpUser, newSignInUser, inviteUser};
