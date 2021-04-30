import {Button, Text, View} from "react-native";
import styles from "../../Style/Style";
import React, {useEffect} from "react";
import * as Progress from 'react-native-progress';
import {retrieveData, STORAGE_KEY_TOKEN} from "../../utils/Storage";
import {useDispatch} from "react-redux";
import {setToken, setUser} from "../../redux";
import {KEY, ScreenNames} from "../../utils/Utils";

function SplashScreen({navigation} : any) {

  const dispatch = useDispatch()

  const storedUser = async ({navigation} : any) => {

    const res = await retrieveData(KEY.User);

    if (res) {
      dispatch(setUser(res.user, res.token))
      navigation.navigate(ScreenNames.Menu)
    } else {
      navigation.navigate(ScreenNames.SignIn)
    }
  }

  useEffect(() => {
    storedUser({navigation})
  }, [])

  return (<View style={styles.center2}>
      <Text>Loader</Text>
      <Progress.Bar indeterminate={true}  width={200} />
    </View>);
}

export {SplashScreen}