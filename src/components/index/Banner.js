import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

export default class Banner extends React.Component {
  timer = null; //驱动轮播广告动起来的定时器
  constructor() {
    super();
    this.state = {
      curIndex: 0,
    };
  }
  componentWillUnmount() {
    //组件即将卸载时，必须清除使用的定时器
    clearInterval(this.timer);
  }
  render() {
    // console.log(this.props.imageList);
    if (this.props.imageList.length !== 0) {
      //已经异步获取到轮播图片
      if (this.timer === null) {
        //定时器尚未启动，启动一次即可
        this.timer = setInterval(() => {
          let curIndex = this.state.curIndex;
          curIndex++;
          if (curIndex >= this.props.imageList.length) {
            curIndex = 0; //已经轮播到最后一张，重回第0张
          }
          this.setState({curIndex});
        }, 2000);
      }
      return (
        <View style={ss.img_box}>
          <Image
            style={ss.img}
            source={{
              uri: this.props.imageList[this.state.curIndex].img_url,
            }}
          />
        </View>
      );
    } else {
      return (
        <View style={ss.img_box}>
          <Image source={require('../../assets/loading.jpg')} style={ss.img} />
        </View>
      );
    }
  }
}

let ss = StyleSheet.create({
  img_box: {
    paddingHorizontal: 8,
  },
  img: {
    width: Dimensions.get('window').width - 16,
    height: Dimensions.get('window').width - 200,
  },
});
