import {Button, Text, View} from 'react-native';
import React, {Component, useState} from 'react';
import styles from '../../Style/Style';
import {Input} from 'react-native-elements';
import {newSignInUser} from '../../httprequest/HttpRequest';

class SignIn extends Component<any, any> {
  navigation = this.props.navigation;
  state = {
    username: '',
    password: '',
    data: null,
  };

  setUserName = (username: string) => {
    this.setState({username: username});
  };
  setUserPassword = (password: string) => {
    this.setState({password: password});
  };

  //john@hotmail.fr
  //000000
  render() {
    //let initial_data: any;
    //const [inseredData, setinseredData] = useState('Bienvenue');
    //const [userName, setUserName] = useState('');
    //const [userPassword, setUserPassword] = useState('');
    //const [data, setData] = useState(initial_data);
    return (
      <View style={styles.center2}>
        <Text>Bienvenu {this.state.username}</Text>
        <Input
          placeholder="Nom d'utilisateur"
          onChangeText={text => this.setUserName(text)}
        />
        <Input
          placeholder="Mot de passe"
          onChangeText={text => this.setUserPassword(text)}
        />
        <Button
          title="Se connecter"
          onPress={async () => {
            //setinseredData('Bienvenu ' + userName);
            //console.log('Resultat ', data);
            //Push to menu
            //navigation.navigate('Menu');
            let tmpData = await newSignInUser(
              this.state.username,
              this.state.password,
            );
            console.log('Data :', tmpData);
            this.setState({data: tmpData.token});
          }}
        />

        <Button title="Retour" onPress={() => this.navigation.goBack()} />
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}

export default SignIn;
