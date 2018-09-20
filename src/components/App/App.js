import React, { Component } from 'react';
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
                    false ? <NoteList /> : null
                }
            </div>
        );
    }
}

export default App;
