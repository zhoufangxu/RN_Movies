import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
export default class WantSeeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
    };
  }
  userInputChange = val => {
    this.setState({
      userInput: val,
    });
  };
  render() {
    return (
      <View style={styles.input_box}>
        <TextInput
          style={styles.input}
          placeholder="记录一下想看的理由"
          value={this.state.userInput}
          onChangeText={this.userInputChange}
          multiline={true}
        />
        <View style={styles.btn}>
          <Button title="确定" color="#fff" />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  input_box: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#747474',
    borderRadius: 5,
    height: 170,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#f4511e',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
