import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../../Style/Style';
import {Input} from 'react-native-elements';
import {newSignUpUser} from '../../httprequest/HttpRequest';
import {useDispatch} from "react-redux";
import {setUser} from "../../redux";
import {ScreenNames} from "../../utils/Utils";

function SignUp({navigation}: any) {

  let initial_data: any;

  const [inseredData, setinseredData] = useState('Inscrivez vous !');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [data, setData] = useState(initial_data);
  const dispatch = useDispatch()

  const onPress = async () => {
    const res = await newSignUpUser(userEmail, userName, userPassword);
    console.log("DATA :", res)
    dispatch(setUser(res.user, res.token))
    navigation.navigate(ScreenNames.SignIn);
  };

  return (
    <View style={styles.center2}>
      <Text>{inseredData}</Text>
      <Input
        textContentType="emailAddress"
        autoCompleteType="email"
        placeholder="Adresse Email"
        onChangeText={text => setUserEmail(text)}
      />
      <Input
        placeholder="Votre nom d'utilisateur"
        onChangeText={text => setUserName(text)}
      />
      <Input
        placeholder="Mot de passe"
        autoCompleteType="password"
        textContentType="newPassword"
        onChangeText={text => setUserPassword(text)}
      />
      <Button title="S'inscrire" onPress={onPress} />
      <Text>{data}</Text>

      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SignUp;
