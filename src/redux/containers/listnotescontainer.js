import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ListNotes from '../../components/listnotes';

import { addAll } from '../actions/actions'


/*
  map state to props -> antes de entregar o Componente ao codigo que vai utiliza-lo ele 
  mapeia state do store para props do componente. Entao o objeto que retornar vai estar 
  disponivel no ocmponente conectado
*/
function mapStateToProps(state) {
    //console.log(state);
    return { notesList: state.notes }
}

const mapDispatchToProps = {
    addAll
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNotes)
