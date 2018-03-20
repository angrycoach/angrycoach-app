
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Note extends Component {

    constructor(props){
        super(props);
        this.state = {
          deleted: false,
          done: false,
          textButtonDone: 'Done',
        }

        this.done = this.done.bind(this); //Porque tive que botar isso pra funcionar o State??
        this.delete = this.delete.bind(this); //Porque tive que botar isso pra funcionar o State??
    }

    componentDidMount(){
        
        this.setState({
            done: this.props.note.done,
            deleted: this.props.note.deleted
        });

        if (this.props.note.done){
            this.setState({ textButtonDone: 'Cancel' });
        }else{
            this.setState({ textButtonDone: 'Done' });
        }
    }

    done(){
        let currentNote = this.props.note;

        if (this.state.done){
            this.setState({ done: false, textButtonDone: 'Done' });
            currentNote.done = false;
        }else{
            this.setState({ done: true, textButtonDone: 'Cancel' });
            currentNote.done = true;
        }

        this.saveNote(currentNote);
    }

    delete(){
        let currentNote = this.props.note;
        currentNote.deleted = true;
        this.saveNote(currentNote);
    }

    saveNote(note){
        fetch(
            "https://desolate-shore-59639.herokuapp.com/task/" + note.uuid.toString(), 
            { 
                method: 'PUT', 
                headers: { 'content-type': 'application/json'}, 
                body : JSON.stringify(note)
            }
        ).then(() => this.retrieveDataAPI());

        this.setState({done: note.done, deleted: note.deleted})
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

        let text;
        //let date;
        
        if (this.state.done){
            //date = <Text style={[styles.dateText, {textDecorationLine: 'line-through'}]}>{this.props.val.date}</Text>
            text = <Text style={[styles.noteText, {textDecorationLine: 'line-through'}]}>{this.props.note.name}</Text>
        }else{
            
            //date = <Text style={styles.dateText}>{this.props.val.date}</Text>
            text = <Text style={styles.noteText}>{this.props.note.name}</Text>
        }

        return (
            <View key={this.props.keyVal} style={styles.note}>

                <View style={{flex: 5, height: 46}}>
                    {/* <View style={{height: 20, justifyContent: 'center'}}>
                        {date}
                    </View> */}
                    <View style={{height: 46, justifyContent: 'center'}}>
                        {text}
                    </View>
                </View>

                <View style={{flex: 2, flexDirection: 'row'}}>
                    <TouchableOpacity onPress={this.done} style={{flex: 1, justifyContent: 'center', alignItems: 'center', 
                        backgroundColor: '#02C39A', borderRadius: 8, borderColor: 'transparent', borderWidth: 4}}>
                        <Text style={styles.noteDeleteText}>{this.state.textButtonDone}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.delete} style={{flex: 1, justifyContent: 'center', alignItems: 'center', 
                        backgroundColor: '#ff4d4d', borderRadius: 8, borderColor: 'transparent', borderWidth: 4}}>
                        <Text style={styles.noteDeleteText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    note:{
        borderBottomWidth: 8,
        borderBottomColor: '#ddd',
        backgroundColor: '#f2f2f2',
        flex: 1,
        flexDirection: 'row',
    },
    noteText: {
        fontSize: 16,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#028090',
    },
    dateText: {
        fontStyle: 'italic',
        fontSize: 14,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#028090',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 14,
        bottom: 14,
        right: 14,
    },
    noteDeleteText: {
        fontSize: 14,
        color: 'white',
    }

});
