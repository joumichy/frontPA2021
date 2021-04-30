import {Button, Linking, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import email from 'react-native-email';
import {useSelector} from "react-redux";
import {GlobalState} from "../../redux";
import styles from "../../Style/Style";
import {ScreenNames} from "../../utils/Utils";
import inviteUser from "./api";

function Compte(props : any) {
  const [newUserEmail, setNewUserEmail] = useState('');
  const navigation = props.navigation

  const userToken = useSelector<GlobalState>(state => state.token) || null
  // @ts-ignore
  return (
    <View>
      <Input
        placeholder="Nom d'utilisateur"
        onChangeText={text => setNewUserEmail(text)}
      />
      <Button
        title="Ajouter un nouvel utilisateur !"
        onPress={async () => {
          console.log('Envoie du mail en cours...');
          const res = await inviteUser(newUserEmail, userToken);
          console.log("Resulat : ", res);
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={ () => {
          console.log('RESULT COMPTE', props);
          navigation.navigate(ScreenNames.QrCode);

        }}>
        <Text>QRCODE</Text>
      </TouchableOpacity>


    </View>
  );

}

export default Compte;
