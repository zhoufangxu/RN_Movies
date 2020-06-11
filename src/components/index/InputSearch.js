import React from 'react';
import {View, TextInput} from 'react-native';
export default class InputSearch extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <TextInput placeholder="请输入片名,主演或者导演" />
      </View>
    );
  }
}
