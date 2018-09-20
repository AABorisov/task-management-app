import React, { Component } from 'react';

import TaskItem from './TaskItem/TaskItem';
import './TaskList.css';
import AddTask from "./TaskItem/AddTask";

class TaskList extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    id : 1,
                    title : "Default",
                    notes : ["..."],
                    started : false,
                    completed : false,
                    timeCreated : new Date(),
                    timeStarted : null,
                    timeCompleted : null
                },
                {
                    id : 2,
                    title : "Default 2",
                    notes : ["... 1", ",,, 2"],
                    started : false,
                    completed : false,
                    timeCreated : new Date(),
                    timeStarted : null,
                    timeCompleted : null
                }
            ]
        };
    }
    render() {
        const {tasks} = this.state;
        return (
            <div className = 'task-list'>
                <AddTask />
                {
                    tasks.map(task =>
                        <TaskItem
                            task = {task}
                            key = {task.id}
                        />
                    )
                }
            </div>
        );
    }
}

export default TaskList;