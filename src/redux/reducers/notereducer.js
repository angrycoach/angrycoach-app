const reducerNote = ( state = [], action) => {
    
    switch(action.type) {
        case 'ADD_ALL':
            return action.note;

        case 'DONE_NOTE':
            return action.note;

        case 'DELETE_NOTE':
            return action.note;

        default: 
            return state;
    }
}
    
export default reducerNote
