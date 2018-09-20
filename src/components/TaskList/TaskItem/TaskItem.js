import React, {Component} from 'react';

import './TaskItem.css';
import TaskButton from "./TaskButton";

class TaskItem extends Component {
    constructor(props) {
        super();
        this.state = {
            ...props.task
        };

        this.startTask = this.startTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    startTask() {
        console.log("Start task", this.state);
        this.setState({started: true});
    }

    completeTask() {
        console.log("Complete task", this.state);
        this.setState({completed: true});
    }

    render() {
        const task = this.state;
        return <div
            className = 'task-item'
        >
            <span className = 'task-title'>{task.title}</span>
            <TaskButton
                task = {task}
                handlers = {{
                    startTask : this.startTask,
                    completeTask : this.completeTask
                }}
            />
            <span
                className= 'task-info'
            >
                <label>Notes:</label>
                <span>{task.notes.length}</span>
                <label>Time in work:</label>
                <span>{0}</span>
            </span>
        </div>
    }
}

export default TaskItem;