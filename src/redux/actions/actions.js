export const addAll = note => {
    console.log(note);
    return {
        type: 'ADD_ALL',
        note
    };
}

export const doneNote = note => {
    return {
        type: 'DONE_NOTE',
        note
    };
}

export const deleteNote = note => {
    return {
        type: 'DELETE_NOTE',
        note
    };
}