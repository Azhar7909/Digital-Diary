import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import {createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation'
import Login from './Components/laogIn_signUp/logIn'
import Signup from './Components/laogIn_signUp/signUp'
import HomePage from './Components/HomePage'
import ContentRelating from './Components/contentRelating'
// import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = createStackNavigator({
  ContentRelating:ContentRelating,
})



const AppNavigator = createSwitchNavigator({
  Login:Login,
  Signup:Signup,
  HomePage:HomePage,
})

export default class App extends Component {
  render() {
    return (
      <View>
        <AppNavigator/>
      <StackNavigator/>
      </View>
    )
  }
}