import {Button, View} from 'react-native';
import {Input} from 'react-native-elements';
import React, {useState} from 'react';
import email from 'react-native-email';
import {useSelector} from "react-redux";
import {GlobalState} from "../../redux";

//employe3@hotmail.fr
function Compte() {
  const [newUserEmail, setNewUserEmail] = useState('');

  const user = useSelector<GlobalState>(state => state.user)
  const userToken = useSelector<GlobalState>(state => state.token)
  // @ts-ignore
  const userEmail = user.email
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
          sendEmail(newUserEmail);
          /*const result = await newSecretSignUp(
            newUserEmail,
            userEmail,
            'EMPLOYE',
            false,
          );*/
          //console.log(result);
        }}
      />
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
