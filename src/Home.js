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
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Image,
  ImageBackground
} from 'react-native';
import Task from './components/Task';

import ListNotes from './redux/containers/listnotescontainer';
import AddNotes from './redux/containers/addnotescontainer';

type Props = {};

export default class Home extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ANGRY COACH</Text>
        </View>
        <ListNotes />
        <AddNotes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#028090',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 18,
  },
  footer: {
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    marginRight: 20,
    backgroundColor: '#028090',
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: 45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#02C39A',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  imgBackground:{
    flex: 1,
    //resizeMode: 'stretch',
    justifyContent: 'center', 
    alignItems: 'center',
    height: null,
    width: null,
    //alignSelf: 'stretch',
},
});
