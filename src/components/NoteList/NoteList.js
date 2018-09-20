import React from 'react';

import NoteItem from './NoteItem';
import AddNote from "./AddNote";

export default (props) => (
    <div className = 'note-list'>
        <AddNote />
        {
            props.notes.reverse().map(note => (
                <NoteItem
                    note = {note}
                    key = {note}
                />
            ))
        }
    </div>
);