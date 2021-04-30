import axios from "axios";
import {signIn} from "../../utils/Path";

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

export default newSignInUser;