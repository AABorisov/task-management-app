import React from 'react';
import { connect } from 'react-redux';

import NoteItem from './NoteItem';
import AddNote from './AddNote';
import './NoteList.css';

const NoteList = (props) => {
    const selectedTask = props.selectedTask;
    const notes = props.tasks.find(task => task.id === selectedTask).notes;
    return (
        <div className = 'note-list'>
            <AddNote />
            {
                notes.map(note => (
                    <NoteItem
                        note = {note}
                        key = {note}
                    />
                )).reverse()
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks,
        selectedTask: state.tasks.selectedTask
    }
}

export default connect(mapStateToProps, null)(NoteList)