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


export default class AuthLoadingPage extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
