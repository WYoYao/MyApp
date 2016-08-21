/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @Leo
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import Rooter from '../app/Rooter';
import TopTitle from './app/component/TopTitle';

console.log(1);
class MyNative extends Component{
  render(){
    return(<TopTitle></TopTitle>)
  }
}

AppRegistry.registerComponent('MyNative', () => MyNative);
