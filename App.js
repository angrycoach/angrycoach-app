/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './src/Home';

import { Provider } from 'react-redux';
import store from './src/redux/store';

type Props = {};
export default class App extends Component<Props> {

  constructor(props, context) {
    super(props, context);

    this.state = {
      ready: false,
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ ready: true })
    }, 2400)
  }

  render() {
    
    if (this.state.ready === false) {
      return  (
        <View style={styles.container}>
          <Text style={styles.welcome}>Angry Coach</Text>
          <Text style={styles.instructions}>2018</Text>
        </View>
      );
      
    }else{
      return (
        <Provider store={store}>
          <Home/>
        </Provider>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05668D',
  },
  welcome: {
    fontSize: 30,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
  },
});
