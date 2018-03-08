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

type Props = {};

export default class Home extends Component<Props> {

  constructor(props, context) {
    super(props, context);

    this.state = {
      notes: [],
      noteText: '',
    };
  }

  addNote(){
    if (this.state.noteText === '') {
      alert('É preciso inserir uma tarefa');
      return;
    }

    var task = {name: this.state.noteText};
    
    fetch(
      "https://desolate-shore-59639.herokuapp.com/task", 
      { 
          method: 'POST', 
          headers: { 'content-type': 'application/json'}, 
          body : JSON.stringify(task)
      }
    );
  }

  deleteNote(key){
    let notesArray = this.state.notes;
    notesArray.splice(key, 1);
    this.setState({notes: notesArray});
  }

  componentDidMount(){
    this.retrieveDataAPI();
  }

  retrieveDataAPI(){
    fetch('https://desolate-shore-59639.herokuapp.com/task')
    .then(response => response.json())
    .then(body  => { 
      this.setState({notes: body});
    })
    .catch( err => alert(err));
  }

  render() {

    let notes = this.state.notes.map((val, key) => {

      if (!val.deleted){
        return <Task key={key} keyval={key} note={val} deleteMethod={ () => this.deleteNote(key)}/>
      }
    });
    console.log(notes);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>ANGRY COACH</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput style={styles.TextInput}
              onChangeText={(noteText) => this.setState({noteText})} value={this.state.noteText}
              placeholder=' > Nova tarefa...' 
              placeholderTextColor='#737373' 
              underlineColorAndroid='transparent'>
          </TextInput>
        </View>
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
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
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
