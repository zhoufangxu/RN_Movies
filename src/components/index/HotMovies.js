import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class HotMoviesScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.MoviesList);
    let MoviesList = this.props.MoviesList;
    return (
      <View style={styles.MoviesList_box}>
        <Text style={styles.MoviesList_Title}>热门电影</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {MoviesList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                  this.props.this.props.navigation.navigate(
                    'MoviesInfoScreen',
                    {id: item.id},
                  );
                }}>
                <View style={styles.MoviesList_item}>
                  <Image
                    source={{uri: item.images.medium}}
                    style={styles.imageStyle}
                  />
                  <Text
                    style={styles.titile}
                    ellipsizeMode="tail"
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text
                    style={styles.author}
                    ellipsizeMode="tail"
                    numberOfLines={1}>
                    {item.casts[0].name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  MoviesList_Title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  MoviesList_box: {
    flexDirection: 'column',
    padding: 10,
    marginVertical: 10,
  },
  imageStyle: {
    width: 101,
    height: 140,
  },
  MoviesList_item: {
    marginRight: 10,
  },
  titile: {
    fontSize: 16,
    marginVertical: 5,
    width: 101,
  },
  author: {
    fontSize: 14,
    color: '#747474',
    width: 101,
  },
});
