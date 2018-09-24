import React from 'react';
import { connect } from 'react-redux';

import NoteItem from './NoteItem';
import AddNote from './AddNote';
import './NoteList.css';

const NoteList = (props) => {
    const selectedTask = props.selectedTask;
    const notes = props.tasks.find(task => task.id === selectedTask).notes;
    return (
        <div className = 'notes'>
            <AddNote />
            <div className = 'note-list'>
                {
                    notes.map((note, index) => (
                        <NoteItem
                            note = {note}
                            key = {index}
                        />
                    )).reverse()
                }
            </div>
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