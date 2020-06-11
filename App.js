import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './src/components/LoginScreen';
import MainScreen from './src/components/MainScreen';
import {Image, StyleSheet} from 'react-native';
import InputSearch from './src/components/index/InputSearch';
import MoviesInfoScreen from './src/components/MoviesInfoScreen';

const Tab = createBottomTabNavigator();

const MainStack = createStackNavigator();
function MainStackScreen() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{title: '腾讯视频'}}
      />
      <MainStack.Screen
        name="InputSearch"
        component={InputSearch}
        options={{title: '腾讯视频'}}
      />
      <MainStack.Screen
        name="MoviesInfoScreen"
        component={MoviesInfoScreen}
        options={{title: '电影详情'}}
      />
    </MainStack.Navigator>
  );
}

const LoginStack = createStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '登录'}}
      />
    </LoginStack.Navigator>
  );
}

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              if (route.name === 'Main') {
                if (focused) {
                  return (
                    <Image
                      source={require('./src/assets/index_active.png')}
                      style={styles.iconStyle}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require('./src/assets/index.png')}
                      style={styles.iconStyle}
                    />
                  );
                }
              } else if (route.name === 'Login') {
                if (focused) {
                  return (
                    <Image
                      source={require('./src/assets/my_active.png')}
                      style={styles.iconStyle}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require('./src/assets/my.png')}
                      style={styles.iconStyle}
                    />
                  );
                }
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#f4511e',
          }}>
          <Tab.Screen
            name="Main"
            component={MainStackScreen}
            options={{title: '首页'}}
          />
          <Tab.Screen
            name="Login"
            component={LoginStackScreen}
            options={{title: '登录'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

let styles = StyleSheet.create({
  iconStyle: {
    width: 30,
    height: 30,
  },
});
