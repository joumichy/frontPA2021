import {Button, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import styles from '../../Style/Style';
import {Input} from 'react-native-elements';
import {connect, useDispatch, useSelector} from 'react-redux';
import {GlobalState, setUser} from "../../redux";
import {newSignInUser,} from "../../httprequest/HttpRequest";
import {ScreenNames} from "../../utils/Utils";
import User from "../../model/User";


function SignIn(props : any) {
  const navigation = props.navigation;
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState('')

  const dispatch = useDispatch()
  const onLogin = async (userEmail : string, userPassword: string) => {
    const res = await newSignInUser(userEmail, userPassword);
    //console.log("DATA :", res)
    dispatch(setUser(res.user, res.token))
    navigation.navigate(ScreenNames.Menu);
  };

  const user = useSelector<GlobalState>(state => state.user)

  //john@hotmail.fr
  //000000
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
          onPress={() => {
            onLogin(username,password)
            //Push to menu
            //navigation.navigate('Menu');
          }}
        />
        <Button title="Retour" onPress={() => navigation.goBack()} />
        <Text>{data}</Text>
      </View>
    );
}

//Creer les actions


export default (SignIn);
