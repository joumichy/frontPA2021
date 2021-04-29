//Ajouter Ecran de chargement


import {Button, Text, View} from "react-native";
import styles from "../../Style/Style";
import React from "react";
import * as Progress from 'react-native-progress';
import {retrieveData, STORAGE_KEY_TOKEN} from "../../utils/Storage";
import {useDispatch} from "react-redux";
import {setToken, setUser} from "../../redux";
import {KEY, ScreenNames} from "../../utils/Utils";

function Loader({navigation} : any){
  const dispatch = useDispatch()
  const storedUser = async ({navigation} : any) => {
    const res = await retrieveData(KEY.User);
    console.log("Resulat :", res)
    if(res){

      console.log("Success !")

      dispatch(setUser(res.user, res.token))
      navigation.navigate(ScreenNames.Menu)
    }
    else{
      navigation.navigate(ScreenNames.SignIn)
    }
  }
  storedUser({navigation})

  return (
    <View style={styles.center2}>
      <Text>Loader</Text>
      <Progress.Bar indeterminate={true}  width={200} />
    </View>

  );
}
export {Loader}