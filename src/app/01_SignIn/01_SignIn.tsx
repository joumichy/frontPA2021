import {Button, Text, View} from 'react-native';
import React, {Component, useEffect} from 'react';
import styles from '../../Style/Style';
import {Input} from 'react-native-elements';
import {connect, useSelector} from 'react-redux';

interface State {
  username: string
  password: string
  data: any|null
}
function SignIn extends Component<any, State> {
  navigation = this.props.navigation;
  state = {
    username: '',
    password: '',
    data: null,
  };

//   const user = useSelector(state1 => state1.user)

  constructor(props: any) {
    super(props);
    this.setUserName = this.setUserName.bind(this)
    this.setUserPassword = this.setUserPassword.bind(this)
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any) {

    useEffect(() => {
      fonction1()
    }, [this.state.username, this.state.password])

    if (prevState.username !== this.state.username) {
      // fonction1()
    }

    if (prevState.password !== this.state.password) {
      // fonction1()
    }
  }

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
          onPress={() => {
            //setinseredData('Bienvenu ' + userName);
            //console.log('Resultat ', data);
            /*let tmpData = await newSignInUser(
              this.state.username,
              this.state.password,
            );
            console.log('Data :', tmpData);
            this.setState({data: tmpData.token});*/
            //Push to menu
            let result = {
              username: 'John',
              token: '000000',
              email: 'john@mail.com',
            };
            //this.props.sendUserDataDispatch(result);
            this.navigation.navigate('Menu');
          }}
        />

        <Button title="Retour" onPress={() => this.navigation.goBack()} />
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}

//Creer les actions
function mapDispatchToProps(dispatch: any) {
  return {
    sendUserDataDispatch: () => dispatch({type: 'SEND_USER_DATA'}),
  };
}

function mapStateToProps(state: any) {
  return {
    userData: state.userData,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
