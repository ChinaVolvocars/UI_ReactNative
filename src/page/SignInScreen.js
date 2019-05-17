import React, {Component} from 'react';
import {
  Platform,
  ActivityIndicator,
  StyleSheet,
  Text,
  AsyncStorage,
  View,
  TextInput, StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';


export default class SignInScreen extends Component {


  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
