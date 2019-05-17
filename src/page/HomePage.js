import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View, Text, TextInput, Image,
} from 'react-native';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';


export default class HomePage extends React.Component {
  static navigationOptions = {
    title: '主页',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_banner}>

          <View style={styles.container_banner_top}>
            <View style={{alignSelf: 'center', alignItems: 'flex-end'}}>
              <Image
                style={{width: 20, height: 20}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
              <Text style={{fontSize: 19, color: '#fff'}}>杭州</Text>
            </View>
            <View style={styles.container_banner_top_search}>
              <TextInput>杭州</TextInput>
            </View>
            <View style={{alignSelf: 'center',justifyContent: 'center'}}>
              <Image
                style={{width: 20, height: 20}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
              <Text style={{fontSize: 19, color: '#fff'}}>更多</Text>
            </View>
          </View>

        </View>

      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_banner: {
    height: 190,
    backgroundColor: 'red'
  },
  container_banner_top: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
    height: 60,
    left: 0,
    right: 0,
    alignItems: 'stretch',
    backgroundColor: 'sandybrown',
  },
  container_banner_top_search: {
    flex: 1,
    backgroundColor: 'mediumblue',
    alignSelf: 'center',
    height: 58,
    borderRadius: 29,

  },
});
