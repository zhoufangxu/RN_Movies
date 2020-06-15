import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  Button,
} from 'react-native';

export default class MarvellousScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    let url =
      'http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=4';
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({
          productList: body.subjects,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let _this = this.props.this;
    if (this.state.productList.length !== 0) {
      return (
        <View>
          <Text style={styles.title}>精挑好货，不可错过</Text>
          {/* 第一行数据 */}
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                _this.props.navigation.navigate('MoviesInfoScreen', {
                  id: this.state.productList[0].id,
                });
              }}>
              <View style={styles.item}>
                <Image
                  source={{uri: this.state.productList[0].images.medium}}
                  style={styles.image_style}
                />
                <Text style={styles.item_title}>
                  {this.state.productList[0].title}
                </Text>
                <Text style={styles.item_directors}>
                  {this.state.productList[0].directors[0].name}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                _this.props.navigation.navigate('MoviesInfoScreen', {
                  id: this.state.productList[1].id,
                });
              }}>
              <View style={styles.item}>
                <Image
                  source={{uri: this.state.productList[1].images.medium}}
                  style={styles.image_style}
                />
                <Text style={styles.item_title}>
                  {this.state.productList[1].title}
                </Text>
                <Text style={styles.item_directors}>
                  {this.state.productList[1].directors[0].name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* 第二行数据 */}
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                _this.props.navigation.navigate('MoviesInfoScreen', {
                  id: this.state.productList[2].id,
                });
              }}>
              <View style={styles.item}>
                <Image
                  source={{uri: this.state.productList[2].images.medium}}
                  style={styles.image_style}
                />
                <Text style={styles.item_title}>
                  {this.state.productList[2].title}
                </Text>
                <Text style={styles.item_directors}>
                  {this.state.productList[2].directors[0].name}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                _this.props.navigation.navigate('MoviesInfoScreen', {
                  id: this.state.productList[3].id,
                });
              }}>
              <View style={styles.item}>
                <Image
                  source={{uri: this.state.productList[3].images.medium}}
                  style={styles.image_style}
                />
                <Text style={styles.item_title}>
                  {this.state.productList[3].title}
                </Text>
                <Text style={styles.item_directors}>
                  {this.state.productList[3].directors[0].name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* 页面已到最低部 */}
          <Button title="已没用更多数据" disabled />
        </View>
      );
    } else {
      return <ActivityIndicator size="small" style={styles.active} />;
    }
  }
}
let styles = StyleSheet.create({
  image_style: {
    width: (Dimensions.get('window').width - 30) / 2,
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  item: {
    width: (Dimensions.get('window').width - 30) / 2,
    paddingBottom: 10,
    marginLeft: 10,
  },
  item_title: {
    fontSize: 16,
    marginTop: 8,
  },
  item_directors: {
    fontSize: 14,
    color: '#747474',
    marginTop: 8,
  },
  active: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  item_bottom: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
