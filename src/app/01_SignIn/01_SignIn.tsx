import {Button, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import styles from '../../Style/Style';
import {Input} from 'react-native-elements';
import {connect, useDispatch, useSelector} from 'react-redux';
import {GlobalState, setUser} from "../../redux";
import {ScreenNames} from "../../utils/Utils";
import newSignInUser from "./api";

function SignIn(props: any) {

  const navigation = props.navigation;

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState('')

  const dispatch = useDispatch()

  const onLogin = async (userEmail: string, userPassword: string) => {
    const res = await newSignInUser(userEmail, userPassword);
    dispatch(setUser(res.payload.user, res.payload.token))
    navigation.navigate(ScreenNames.Menu);
  };

  return (
    <View style={styles.center2}>
      <Text>Bienvenu</Text>
      <Input
        textContentType="emailAddress"
        autoCompleteType="email"
        placeholder="Adresse Email Utilisateur"
        onChangeText={text => setUsername(text)}
      />
      <Input
        secureTextEntry={true}
        autoCompleteType="password"
        placeholder="Mot de passe"
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Se connecter"
        onPress={() => onLogin(username, password) }
      />
      <Button
        title="S'inscrire"
        onPress={() => navigation.navigate(ScreenNames.SignUp) }
      />
      <Button title="Retour" onPress={() => navigation.goBack()}/>
      <Text>{data}</Text>
    </View>
  );
}

export default (SignIn);
