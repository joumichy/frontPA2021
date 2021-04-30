import {Button, Linking, Text, TouchableOpacity, View} from 'react-native';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import email from 'react-native-email';
import {useSelector} from "react-redux";
import {GlobalState} from "../../redux";
import {inviteUser} from "../../httprequest/HttpRequest";
import styles from "../../Style/Style";
import {ScreenNames} from "../../utils/Utils";

//const user = useSelector<GlobalState>(state => state.user)

function Compte(props : any) {
  const [newUserEmail, setNewUserEmail] = useState('');
  const navigation = props.navigation

  //const user = useSelector<GlobalState>(state => state.user || null)
  const userToken = useSelector<GlobalState>(state => state.token) || null
  // @ts-ignore
  //const userEmail = user.email || "Aucune donnée"
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  }
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

const sendEmail = (newUserEmail: string) => {
  const to = [newUserEmail];
  email(to, {
    cc: ['', ''],
    bcc: '',
    subject: 'Rejoignez Tootsweet !',
    body:
      'Lien : \n\n https://play.google.com/store/apps/details?id=com.tootsweet',
  }).catch(console.error);
};

export default Compte;
