/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BundleBus from 'BundleBus-client';

class jindallae extends Component {
  constructor(props) {
    super(props);
    
    let packageJson = require('./package.json');

    this.state = {
      updateType : 'None',
      error : 0,
      errDesc : '',
      version : packageJson.version
    }


    this.setUpdateType = this.setUpdateType.bind(this);
    this.setErrorType = this.setErrorType.bind(this);
  }

  componentWillMount() {
    BundleBus.init("http://192.168.0.18:3000", this.state.version);
    BundleBus.checkUpdate("d97f2e3c-8d2e-4bb7-ae16-7e082d726fd3", 
        this.setUpdateType,
        this.setErrorType);
  }

  setUpdateType(aType) {
    console.log('called setUpdateType');
    this.setState({updateType: aType});
  }

  setErrorType(aErrorNo, aReason) {
    console.log('called setErrorType');
    this.setState({error : aErrorNo, errDesc: aReason});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>To get started, edit index.android.js.</Text>
        <Text style={styles.instructions}>This app is {this.state.version} version. ^^</Text>
        <Text style={styles.instructions}>UpdateType - {this.state.updateType}</Text>
        <Text style={styles.instructions}>Error No. - {this.state.errorNo}</Text>
        <Text style={styles.instructions}>Error reason - {this.state.errDesc}</Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('jindallae', () => jindallae);

