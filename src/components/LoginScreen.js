import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Text,
} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      uname: '',
      upwd: '',
    };
  }
  changeUname = val => {
    this.setState({
      uname: val,
    });
  };
  changeUpwd = val => {
    this.setState({
      upwd: val,
    });
  };
  isLogin = () => {
    let uname = 'Tom',
      upwd = '123';
    if (this.state.uname === uname && this.state.upwd === upwd) {
      this.props.navigation.navigate('Main', {pid: 1, uname: 'tom'});
    }
  };
  render() {
    return (
      <View style={ss.login_box}>
        <View style={ss.logo_box}>
          <Image source={require('../assets/logo.png')} />
        </View>
        <TextInput
          placeholder="请输入用户名"
          value={this.state.uname}
          onChangeText={this.changeUname}
          maxLength={8}
          style={ss.textLine}
        />
        <TextInput
          placeholder="请输入密码"
          value={this.state.upwd}
          secureTextEntry={true}
          onChangeText={this.changeUpwd}
          maxLength={10}
          style={ss.textLine}
        />
        <TouchableOpacity activeOpacity={0.8}>
          <View style={ss.loginBtn}>
            <Button title="登录" color="#fff" onPress={this.isLogin} />
          </View>
        </TouchableOpacity>
        <View style={ss.text}>
          <Text style={ss.item}>
            登录表示同意
            <Text style={ss.text_avtive}>使用协议/隐私协议</Text>
          </Text>
        </View>
      </View>
    );
  }
}

let ss = StyleSheet.create({
  login_box: {
    padding: 40,
  },
  logo_box: {
    alignItems: 'center',
    marginVertical: 50,
  },
  textLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#747474',
    paddingVertical: 18,
    fontSize: 18,
  },
  loginBtn: {
    backgroundColor: '#f4511e',
    marginTop: 30,
    height: 40,
    borderRadius: 20,
  },
  text: {
    alignItems: 'center',
    marginTop: 360,
  },
  item: {
    fontSize: 16,
    color: '#747474',
  },
  text_avtive: {
    color: '#f4511e',
  },
});
