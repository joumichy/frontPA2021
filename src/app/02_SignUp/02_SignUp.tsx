import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Style/Style';
import {Input} from 'react-native-elements';
import {newSignUpUser} from '../../httprequest/HttpRequest';

function SignUp({navigation}: any) {
  let initial_data: any;
  const [inseredData, setinseredData] = useState('Inscrivez vous !');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [data, setData] = useState(initial_data);

  return (
    <View style={styles.center2}>
      <Text>{inseredData}</Text>
      <Input
        placeholder="Adresse Email"
        onChangeText={text => setUserName(text)}
      />
      <Input
        placeholder="Mot de passe"
        onChangeText={text => setUserPassword(text)}
      />
      <Button
        title="S'inscrire"
        onPress={() => {
          setinseredData('Bienvenu ' + userName);
          setData(newSignUpUser(userName, userPassword));
        }}
      />
      <Text>{data}</Text>

      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SignUp;
