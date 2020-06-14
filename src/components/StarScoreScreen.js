import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
export default class StarScore extends React.Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      totalScore: 5, // 总分值
      currentScore: this.props.score / 2, // 分值
      widthArr: [],
      ratings_count: this.props.ratings_count,
    };
  }
  componentDidMount() {
    console.log(this.props);
    let widthArr = [];
    for (const key in this.props.details) {
      widthArr.push(this.props.details[key]);
    }
    () => {
      this.setState({
        widthArr,
      });
    };
  }
  render() {
    if (this.state.widthArr.length !== 0) {
      let five = this.state.ratings_count / this.state.widthArr[4] / 100;
      console.log(five);
    }
    return (
      <View style={styles.star_box}>
        <View style={styles.title}>
          <Text>电影评分</Text>
          <Text>&gt;</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.star_score}>{this.props.score}</Text>
            <View style={styles.box}>{this._renderBody()}</View>
          </View>
          <View>
            <View style={styles.star_line}>
              <View style={styles.score_item}>
                <View style={styles.star_item_box}>
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                </View>
                <View style={styles.star_item_box}>
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                </View>
                <View style={styles.star_item_box}>
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                </View>
                <View style={styles.star_item_box}>
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                </View>
                <View style={styles.star_item_box}>
                  <Image
                    source={require('../assets/star.png')}
                    style={styles.star_image}
                  />
                </View>
              </View>
              <View style={styles.line_box}>
                <View style={styles.line}>
                  <View style={[styles.line_active, styles.five]} />
                </View>
                <View style={styles.line}>
                  <View style={[styles.line_active, styles.four]} />
                </View>
                <View style={styles.line}>
                  <View style={[styles.line_active, styles.three]} />
                </View>
                <View style={styles.line}>
                  <View style={[styles.line_active, styles.two]} />
                </View>
                <View style={styles.line}>
                  <View style={[styles.line_active, styles.one]} />
                </View>
              </View>
            </View>
            <Text style={styles.count}>{this.props.ratings_count}人评分</Text>
          </View>
        </View>
      </View>
    );
  }
  _renderBody() {
    let images = [];
    for (var i = 1; i <= this.state.totalScore; i++) {
      let currentCount = i;
      images.push(
        <View key={'i' + i}>
          <TouchableOpacity
            onPress={() => {
              this._score(currentCount);
            }}>
            <Image source={require('../assets/star.png')} style={styles.star} />
            {this._renderYellowStart(i)}
          </TouchableOpacity>
        </View>,
      );
    }
    return images;
  }
  _renderYellowStart(count) {
    if (count <= this.state.currentScore) {
      return (
        <Image
          source={require('../assets/star_active.png')}
          style={styles.star_active}
        />
      );
    }
  }
  _score(i) {
    this.setState({
      currentScore: i,
    });
    this.props.selectIndex(i);
  }
}

let styles = StyleSheet.create({
  star_box: {
    margin: 10,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  star_score: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  star_item_box: {
    flexDirection: 'row',
    marginRight: 10,
  },
  star_image: {
    width: 12,
    height: 12,
  },
  score_item: {
    alignItems: 'flex-end',
  },
  line: {
    borderRadius: 3,
    width: 110,
    height: 8,
    backgroundColor: '#dbdbdb',
  },
  line_active: {
    backgroundColor: '#f4511e',
    borderRadius: 3,
    height: 8,
  },
  box: {
    flexDirection: 'row',
    height: 20,
    marginBottom: 6,
    justifyContent: 'center',
  },
  star: {
    width: 20,
    height: 20,
  },
  star_active: {
    width: 20,
    height: 20,
    position: 'absolute',
  },
  star_line: {
    flexDirection: 'row',
  },
  line_box: {
    justifyContent: 'space-between',
  },
  count: {
    color: '#747474',
    textAlign: 'right',
    marginVertical: 5,
  },
});
