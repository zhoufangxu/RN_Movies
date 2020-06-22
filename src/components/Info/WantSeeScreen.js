import React from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
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
          <Button
            title="确定"
            color="#fff"
            onPress={() => {
              let content = this.state.userInput;
              fetch('http://127.0.0.1:3000/addcomment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `nid=5&content=${content}`,
              })
                .then(res => {
                  if (res.status === 200) {
                    Alert.alert(
                      '提示',
                      '发表成功',
                      [
                        {
                          text: 'OK',
                          onPress: () => this.setState({userInput: ''}),
                        },
                      ],
                      {cancelable: false},
                    );
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          />
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
