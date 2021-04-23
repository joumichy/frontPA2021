import {Button, View} from 'react-native';
import {Input} from 'react-native-elements';
import React from 'react';
import email from 'react-native-email';

function Compte() {
  return (
    <View>
      <Input
        placeholder="Nom d'utilisateur"
        onChangeText={text => console.log('...')}
      />
      <Button
        title="Ajouter un nouvel utilisateur !"
        onPress={() => {
          console.log('Envoie du mail...');
          sendEmail();
        }}
      />
    </View>
  );
}

const sendEmail = () => {
  const to = ['allou.john@hotmail.fr'];
  email(to, {
    cc: ['', ''],
    bcc: '',
    subject: 'Inscrivez vous Tootsweet !',
    body:
      'Lien : \n\n https://play.google.com/store/apps/details?id=com.tootsweet',
  }).catch(console.error);
};

export default Compte;
