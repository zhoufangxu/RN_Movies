import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
export default class PerformerScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.outer_box}>
        <Text style={styles.title}>影人</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.props.item.directors.map((arr, index) => {
            return (
              <View key={index} style={styles.box}>
                <View style={styles.image_box}>
                  <Image
                    source={{uri: arr.avatars.medium}}
                    style={styles.image}
                  />
                </View>
                <Text
                  style={styles.name}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {arr.name}
                </Text>
                <Text style={styles.job} ellipsizeMode="tail" numberOfLines={1}>
                  导演
                </Text>
              </View>
            );
          })}
          {this.props.item.casts.map((arr, index) => {
            return (
              <View key={index} style={styles.box}>
                <View style={styles.image_box}>
                  <Image
                    source={{uri: arr.avatars.medium}}
                    style={styles.image}
                  />
                </View>
                <Text
                  style={styles.name}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {arr.name}
                </Text>
                <Text style={styles.job} ellipsizeMode="tail" numberOfLines={1}>
                  演员
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  outer_box: {
    padding: 10,
  },
  box: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
  image_box: {
    width: 100,
    height: 150,
    overflow: 'hidden',
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    marginVertical: 10,
    width: 100,
  },
  job: {
    fontSize: 14,
    color: '#747474',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
