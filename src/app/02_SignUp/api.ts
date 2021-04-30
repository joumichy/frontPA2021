import UserResponse from "../../model/UserResponse";
import axios from "axios";
import {signUp} from "../../utils/Path";

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

export default newSignUpUser;
