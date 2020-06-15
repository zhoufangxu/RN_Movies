import React from 'react';
import {ScrollView} from 'react-native';
import Banner from './index/Banner';
import HotMoviesScreen from './index/HotMovies';
import ListScreen from './index/ListScreen';
import MarvellousScreen from './index/Marvellous';
import MyUserInputScreen from './MyUserInputScreen';

export default class MainScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      imageList: [],
      HotMovies: [],
      contentOffsetY: 0,
    };
  }
  componentDidMount() {
    //组件挂载完成
    let url = 'http://127.0.0.1:3000/imageList';
    let imageList = fetch(url) //获取轮播图数据
      .then(res => {
        return res.json();
      })
      .then(body => {
        return body;
      })
      .catch(err => {
        console.log(err);
      });
    //发送异步请求获取热门电影数据
    let moviesUrl =
      'http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10';
    let HotMovies = fetch(moviesUrl)
      .then(res => {
        return res.json();
      })
      .then(body => {
        return body.subjects;
      })
      .catch(err => {
        console.log(err);
      });
    Promise.all([imageList, HotMovies]).then(res => {
      // console.log(res);
      this.setState({
        imageList: res[0],
        HotMovies: res[1],
      });
    });
  }
  render() {
    return (
      <ScrollView>
        {/* 搜索组件 */}
        <MyUserInputScreen this={this} />
        {/* 自定义轮播图组件 */}
        <Banner imageList={this.state.imageList} />
        {/* 热门电影组件 */}
        <HotMoviesScreen MoviesList={this.state.HotMovies} this={this} />
        {/* 电影列表组件 */}
        <ListScreen this={this} />
        {/* 电影列表组件 */}
        <MarvellousScreen this={this} />
      </ScrollView>
    );
  }
}
