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

import MyActivityIndicator from './app/systemcomponent/MyActivityIndicator/MyActivityIndicator';
import MyTimerMixin from './app/myapi/MyTimerMixin';


class MyNative extends Component{
  render(){
    return(<Demo></Demo>)
  }
}

AppRegistry.registerComponent('MyNative', () => MyTimerMixin);
