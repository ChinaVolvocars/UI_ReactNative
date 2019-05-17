/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LoginPage extends Component<Props> {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>您好，请登录</Text>
        <Text style={styles.welcome}>欢迎进入骆驼建材</Text>
        <TextInput style={styles.account}>输入手机号/用户名</TextInput>
        <TextInput style={styles.password}>输入密码</TextInput>
        <View style={styles.container_login}>
          <Button style={styles.action_login} title={'登陆'} color={'#DDDDDD'}/>
        </View>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Other')
        }}>
          <Text style={{
            backgroundColor: 'red',
            height: 45,
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            textAlignVertical: 'center'
          }}>设置界面</Text>
        </TouchableOpacity>

        <View style={styles.container_hor}>
          <Text style={styles.forget}>注册账号</Text>
          <Text style={styles.forget}>忘记密码</Text>
        </View>

        <Text style={{
          fontSize: 18,
          color: '#333333',
          marginTop: 12
        }} onPress={() => {
          this.props.navigation.navigate('HomePage')
        }}>去主页面</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#F5FCFF',
  },
  container_login: {
    marginTop: 15,
    height: 55
  },
  container_hor: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  login: {
    fontSize: 32,
    marginTop: 91,
    color: '#000000'
  },
  welcome: {
    fontSize: 14,
    color: '#333333',
    marginTop: 7
  },
  forget: {
    fontSize: 13,
    color: '#333333',
  },
  account: {
    fontSize: 19,
    color: '#C7C7CD',
    marginTop: 63,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1
  },
  password: {
    fontSize: 19,
    color: '#C7C7CD',
    marginTop: 21,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1
  },
  action_login: {
    fontSize: 17,
    backgroundColor: '#DDDDDD'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
