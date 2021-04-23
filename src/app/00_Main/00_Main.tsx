import {Button, Text, View} from 'react-native';
import React from 'react';
import styles from '../../Style/Style';
import {ScreenNames} from "../../utils/Utils";

function MainScreen({navigation}: any) {
  return (
    <View style={styles.center2}>
      <Text>Home Screen</Text>
      <Button
        title="Se connecter"
        onPress={() => navigation.navigate(ScreenNames.SignIn)}
      />
      <Button
        title="S'inscrire"
        onPress={() => navigation.navigate(ScreenNames.SignUp)}
      />
    </View>
  );
}

export default MainScreen;
