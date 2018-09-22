import React from 'react';
import { connect } from 'react-redux';
import {startTask, completeTask, selectTask} from "../../../actions";

import './TaskItem.css';
import TaskButton from "./TaskButton";

const TaskItem = props => {
    const task = props.task;
    const startTask = props.startTask.bind({}, task.id);
    const completeTask = props.completeTask.bind({}, task.id);
    const selectTask = props.selectedTask !== task.id ? props.selectTask.bind({}, task.id) : null;
    return <div
        className = 'task-item'
        onClick = { selectTask }
        style = {props.selectedTask === task.id ? {'backgroundColor' : 'rgba(0,0,0,0.05)'} : null}
    >
        <div className = 'task-content'>
            <span className = 'task-title'>{ task.title }</span>
            <label>Notes:</label>
            <span>{task.notes.length}</span>
            <label>Time in work:</label>
            <span>{Math.floor(task.timeWorking/(60*60)) + " : " +
            Math.floor((task.timeWorking%(60*60))/60) + " : " +
            Math.floor((task.timeWorking%(60)))}</span>
        </div>
        <TaskButton
            task = { task }
            handlers = {{
                startTask,
                completeTask
            }}
        />
    </div>
};

function mapStateToProps(state) {
    return {
        selectedTask: state.tasks.selectedTask
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startTask: (taskId) => {
            dispatch(startTask(taskId));
        },
        completeTask: (taskId) => {
            dispatch(completeTask(taskId));
        },
        selectTask: (taskId) => {
            dispatch(selectTask(taskId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);