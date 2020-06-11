import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
export default class MyUserInputScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={ss.search}>
        <Image source={require('../assets/search.png')} style={ss.search_img} />
        <TextInput
          placeholder="请输入片名,主演或者导演"
          style={ss.userInput}
          onFocus={this.jumpSearch}
        />
      </View>
    );
  }
}

let ss = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
  search_img: {
    width: 30,
    height: 30,
  },
  userInput: {
    fontSize: 16,
  },
});
