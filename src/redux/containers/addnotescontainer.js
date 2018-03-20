import React, { Component } from 'react';
import { connect } from 'react-redux';
import  AddNotes from '../../components/addnotes';

import { addAll } from '../actions/actions'

function mapStateToProps(state) {
    
    return { notesList: state.notes }
}

const mapDispatchToProps = {
    addAll
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNotes)