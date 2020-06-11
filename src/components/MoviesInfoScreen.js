import React from 'react';
import {View, Text} from 'react-native';
export default class MoviesInfoScreen extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(this.props.route.params.id);
  }
  render() {
    return (
      <View>
        <Text>MoviesInfoScreen</Text>
      </View>
    );
  }
}
