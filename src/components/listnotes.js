import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

//import Note from './redux/containers/noteContainer';
import Task from '../redux/containers/notecontainer';

class ListNotes extends Component {

    componentDidMount(){
        this.retrieveDataAPI();
    }
    
    retrieveDataAPI(){
        fetch('https://desolate-shore-59639.herokuapp.com/task')
        .then(response => response.json())
        .then(body  => {
          //We pass to Store the body from API
          this.props.addAll(body);
        })
        .catch( err => alert(err));
    }

    render(){
        //notesList is from Store ok?
        var notes = this.props.notesList.map((val, key) => {
            if (!val.deleted){ //Somente retorna Notes que nao foram deletados
                //console.log(val);
                return <Task key={key} note={val} />
            }
        });

        return (
            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    }
});


export default ListNotes;