import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import NoteList from "../NoteList/NoteList";

class App extends Component {
    render() {
        return (
            <div className='page-container'>
                <Header />
                <TaskList />
                {
                    this.props.selectTask !== null ? <NoteList /> : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectTask: state.tasks.selectedTask
    }
}

export default connect(mapStateToProps)(App);
