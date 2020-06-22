import React from 'react';
import {View, TextInput, Image, StyleSheet, FlatList, Text} from 'react-native';
export default class InputSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      List: [],
    };
  }
  _renderItem = data => {
    return (
      <View>
        <View style={styles.box}>
          <Text style={styles.item_index}>{data.index + 1}</Text>
          <Text
            style={styles.item_title}
            onPress={() => {
              this.props.navigation.navigate('MoviesInfoScreen', {
                id: 25842038,
              });
            }}>
            {data.item.lname}
          </Text>
        </View>
      </View>
    );
  };
  _keyExtractor = (p, i) => {
    return String(i);
  };
  //获取用户输入信息
  doChangeValue = val => {
    this.setState(
      {
        userInput: val,
      },
      () => {
        this.getList();
      },
    );
  };
  getList = () => {
    let val = this.state.userInput;
    let url = `http://127.0.0.1:3000/search?key=${val}`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({
          List: body.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <View>
        <View style={styles.search}>
          <Image
            source={require('../../assets/search.png')}
            style={styles.search_img}
          />
          <TextInput
            placeholder="请输入片名,主演或者导演"
            style={styles.userInput}
            value={this.state.userInput}
            onChangeText={this.doChangeValue}
          />
        </View>
        <FlatList
          data={this.state.List}
          renderItem={this._renderItem}
          style={styles.list}
          keyExtractor={this._keyExtractor}
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
  list: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  item_index: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  item_title: {
    fontSize: 20,
    marginLeft: 10,
    width: 360,
  },
});
