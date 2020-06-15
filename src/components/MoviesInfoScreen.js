import React from 'react';
import PerformerScreen from './Info/PerformerScreen';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import StarScore from './StarScoreScreen';
export default class MoviesInfoScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      MovieInfo: {},
      numberOfLines: 4,
      summary_btn: '展开',
    };
  }
  componentDidMount() {
    let id = this.props.route.params.id;
    let MoviesInfoUrl = `http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
    fetch(MoviesInfoUrl)
      .then(res => {
        return res.json();
      })
      .then(body => {
        this.setState({
          MovieInfo: body,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let item = Object.keys(this.state.MovieInfo);
    // console.log(this.state.MovieInfo);
    if (item.length !== 0) {
      return (
        <ScrollView>
          {/* Info 标题 */}
          <View style={styles.Info_box}>
            <View style={styles.image_box}>
              <Image
                source={{uri: this.state.MovieInfo.images.medium}}
                style={styles.image}
              />
            </View>
            <View style={styles.Movie_info}>
              <Text style={styles.MovieInfo_title}>
                {this.state.MovieInfo.title}
              </Text>
              <Text style={styles.MovieInfo_Entitle}>
                {this.state.MovieInfo.original_title}
              </Text>
              <View style={styles.keys}>
                <Text style={styles.keys}>
                  {this.state.MovieInfo.genres.map((arr, i) => {
                    return <Text key={i}>{arr} </Text>;
                  })}
                  /
                </Text>
                <Text style={styles.keys_item}>
                  {this.state.MovieInfo.countries.map((arr, i) => {
                    return <Text key={i}>{arr} </Text>;
                  })}
                  /
                </Text>
                <Text style={styles.keys_item}>
                  片长{this.state.MovieInfo.durations[0]}
                </Text>
              </View>
              <View style={styles.btns}>
                <View style={styles.btn_box}>
                  <Button
                    title="想看"
                    color="#fff"
                    onPress={() => {
                      this.props.navigation.navigate('WantSeeScreen');
                    }}
                  />
                </View>
                <View style={styles.btn_box}>
                  <Button
                    title="看过"
                    color="#fff"
                    onPress={() => {
                      this.props.navigation.navigate('SeedScreen');
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* 评分组件 */}
          <StarScore
            score={this.state.MovieInfo.rating.average}
            ratings_count={this.state.MovieInfo.ratings_count}
            details={this.state.MovieInfo.rating.details}
          />
          {/* 简介 */}
          <View style={styles.summary}>
            <Text style={styles.summary_title}>简介</Text>
            <Text
              style={styles.summary_container}
              numberOfLines={this.state.numberOfLines}>
              {this.state.MovieInfo.summary}
            </Text>
            <View style={styles.summary_btn}>
              <Button
                title={this.state.summary_btn}
                color="#f4511e"
                onPress={() => {
                  if (this.state.numberOfLines === 4) {
                    this.setState({
                      numberOfLines: 100,
                      summary_btn: '收起',
                    });
                  } else {
                    this.setState({
                      numberOfLines: 4,
                      summary_btn: '展开',
                    });
                  }
                }}
              />
            </View>
          </View>
          {/* 影人介绍 */}
          <PerformerScreen item={this.state.MovieInfo} />
        </ScrollView>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }
}
let styles = StyleSheet.create({
  Info_box: {
    padding: 10,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
  image_box: {
    width: 150,
    height: 202,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 202,
  },
  Movie_info: {
    marginLeft: 10,
    width: Dimensions.get('window').width - 30 - 150,
  },
  keys: {
    flexDirection: 'row',
    color: '#747474',
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn_box: {
    backgroundColor: '#f4511e',
    width: 100,
    height: 42,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MovieInfo_title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  MovieInfo_Entitle: {
    fontSize: 20,
    color: '#747474',
    marginBottom: 10,
  },
  keys_item: {
    color: '#747474',
    marginBottom: 30,
  },
  summary: {
    padding: 10,
  },
  summary_title: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  summary_container: {
    fontSize: 18,
    lineHeight: 26,
    color: '#747474',
  },
  summary_btn: {
    alignItems: 'flex-end',
  },
});
