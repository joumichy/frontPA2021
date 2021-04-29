import AsyncStorage from "@react-native-community/async-storage";
import UserResponse from "../model/UserResponse";

export const STORAGE_KEY_TOKEN = "token"

async function storeData (key : string, data: UserResponse){
  let newData = JSON.stringify(data);
  if(!data){
    return;
  }
  try {
      await AsyncStorage.setItem(key, newData);
  } catch (error) {
    // Error saving data
  }

}

async function retrieveData(key : string){
  if(!key){
    return;
  }

  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Our data is fetched successfully
      let userResponse : UserResponse = JSON.parse(value)
      return userResponse
    }
    else return;
  } catch (error) {
    // Error retrieving data
  }

}

export {storeData, retrieveData}