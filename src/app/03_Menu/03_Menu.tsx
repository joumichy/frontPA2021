import {Button, Text, View} from 'react-native';
import styles from '../../Style/Style';
import React, {Component} from 'react';
import {connect} from 'react-redux';

//import React, {useState} from 'react';

class Menu extends Component<any, any> {
  render() {
    return (
      <View style={styles.center2}>
        <Text>Menu</Text>
        <Text>{this.props.counter}</Text>
        <Button
          title={'Incremente'}
          onPress={() => this.props.incrementeDispatch()}
        />
        <Button
          title={'Decremente'}
          onPress={() => this.props.decrementeDispatch()}
        />
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    counter: state.counter,
  };
}

//Creer les actions
function mapDispatchToProps(dispatch: any) {
  return {
    incrementeDispatch: () => dispatch({type: 'INCREMENTE'}),
    decrementeDispatch: () => dispatch({type: 'DECREMENTE'}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
