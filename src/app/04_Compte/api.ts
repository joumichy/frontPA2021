import axios from "axios";
import {invite} from "../../utils/Path";

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

export default inviteUser;