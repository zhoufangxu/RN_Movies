import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  Button,
} from 'react-native';
export default class ListScreen extends React.Component {
  pno = 0;
  constructor() {
    super();
    this.state = {
      productList: [],
      displayHeight: 0,
      hasMore: true, //还有更多数据可供加载吗？
      canClick: true, //节流判断条件
    };
  }
  componentDidMount() {
    this.loadMore();
  }
  loadMore = () => {
    if (this.state.canClick) {
      this.setState({
        canClick: false,
      });
      if (!this.state.hasMore) {
        return;
      }
      this.pno += 6;
      //发起异步请求，获取数据服务器上的商品列表
      //发送异步请求top250
      let TopUrl = `http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${
        this.pno
      }&count=6`;
      fetch(TopUrl)
        .then(res => {
          return res.json();
        })
        .then(body => {
          // console.log(body);
          //将新数组保存回状态
          this.setState({
            productList: body.subjects,
            canClick: true,
          });
          //console.log(productList)
          //判断还有更多数据吗？
          //目前加载的页号以及要超过总页数
          if (this.pno >= body.total) {
            this.setState({
              hasMore: false,
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  render() {
    let _this = this.props.this;
    if (this.state.productList.length !== 0) {
      return (
        <View>
          <Text style={styles.title}>猜你喜欢</Text>
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
          {/* 第三行数据 */}
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                _this.props.navigation.navigate('MoviesInfoScreen', {
                  id: this.state.productList[4].id,
                });
              }}>
              <View style={styles.item}>
                <Image
                  source={{uri: this.state.productList[4].images.medium}}
                  style={styles.image_style}
                />
                <Text style={styles.item_title}>
                  {this.state.productList[4].title}
                </Text>
                <Text style={styles.item_directors}>
                  {this.state.productList[4].directors[0].name}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                _this.props.navigation.navigate('MoviesInfoScreen', {
                  id: this.state.productList[5].id,
                });
              }}>
              <View style={styles.item}>
                <Image
                  source={{uri: this.state.productList[5].images.medium}}
                  style={styles.image_style}
                />
                <Text style={styles.item_title}>
                  {this.state.productList[5].title}
                </Text>
                <Text style={styles.item_directors}>
                  {this.state.productList[5].directors[0].name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.item_bottom}>
            <Button title="更多电影" color="#747474" />
            <Button title="换一换" onPress={this.loadMore} color="#747474" />
          </View>
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
    height: 220,
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
