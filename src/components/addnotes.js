import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

type Props = {};

export default class AddNotes extends Component<Props> {

  constructor(props, context) {
    super(props, context);
    this.state = {
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
    ).then(() => this.retrieveDataAPI());

    this.setState({noteText: ''});
  }

  retrieveDataAPI(){
    fetch('https://desolate-shore-59639.herokuapp.com/task')
    .then(response => response.json())
    .then(body  => {
        //We pass the body from API to the Store
        this.props.addAll(body);
    })
    .catch( err => alert(err));
  }

  render() {
    return (
      <View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput style={styles.TextInput}
              onChangeText={(noteText) => this.setState({noteText})}
              value={this.state.noteText}
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
});
