import React from 'react';
import {View, TextInput, Button, StyleSheet, Text, Image} from 'react-native';
export default class SeedScreen extends React.Component {
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
        <View style={styles.score}>
          <Text style={styles.score_text}>点击星星评分</Text>
          <Image style={styles.score_image} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="写几句评价吧..."
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
  score: {
    marginVertical: 20,
    alignItems: 'center',
  },
  score_text: {
    color: '#747474',
  },
});
