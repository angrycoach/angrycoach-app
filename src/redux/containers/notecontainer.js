import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Note from '../../components/note';

import { doneNote, deleteNote, addAll } from '../actions/actions';

/*
  map state to props -> antes de entregar o Componente ao codigo que vai utiliza-lo ele 
  mapeia state do store para props do componente. Entao o objeto que retornar vai estar 
  disponivel no componente conectado
*/
function mapStateToProps(state) {
    //console.log(state);
    return { notesList: state.notes }
}

const mapDispatchToProps = {
    doneNote,
    deleteNote,
    addAll
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
