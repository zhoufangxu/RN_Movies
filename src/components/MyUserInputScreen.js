import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
export default class MyUserInputScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    let _this = this.props.this;
    return (
      <View style={styles.search}>
        <Image
          source={require('../assets/search.png')}
          style={styles.search_img}
        />
        <TextInput
          placeholder="请输入片名,主演或者导演"
          style={styles.userInput}
          onFocus={() => {
            _this.props.navigation.navigate('InputSearch');
          }}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
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
