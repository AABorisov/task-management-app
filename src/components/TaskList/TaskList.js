import React from 'react';
import { connect } from 'react-redux';

import TaskItem from './TaskItem/TaskItem';
import './TaskList.css';
import AddTask from "./TaskItem/AddTask";

const TaskList = props => {
    const {tasks} = props;
    return (
        <div className = 'tasks'>
            <AddTask />
            <div className = 'task-list'>
                {
                    tasks.map(task =>
                        <TaskItem
                            task = {task}
                            key = {task.id}
                        />
                    ).reverse()
                }
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps)(TaskList);