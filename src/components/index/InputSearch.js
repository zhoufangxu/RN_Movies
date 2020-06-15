import React from 'react';
import {View, TextInput, Image, StyleSheet, FlatList, Text} from 'react-native';
export default class InputSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      List: [],
    };
  }
  componentDidMount() {
    let moviesUrl =
      'http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=20';
    fetch(moviesUrl)
      .then(res => {
        return res.json();
      })
      .then(body => {
        console.log(body);
        this.setState({
          List: body.subjects,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  _renderItem = obj => {
    return (
      <View style={styles.item}>
        <Text style={styles.item_index}>{obj.index + 1}</Text>
        <Text style={styles.item_title}>{obj.item.title}</Text>
      </View>
    );
  };
  render() {
    console.log(this.state.List);
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
          />
        </View>
        <FlatList
          data={this.state.List}
          renderItem={this._renderItem}
          style={styles.list}
          numColumns={2}
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
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  item_index: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  item_title: {
    fontSize: 17,
  },
});
