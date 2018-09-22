import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask } from "../../../actions";

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value : event.target.value
        });
    }

    handleSubmit(event) {
        this.props.addTask({
            title: this.state.value,
            timeCreated: new Date()
        });
        this.setState({
            value : ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <form
                className="task-item"
                onSubmit={this.handleSubmit}>
                <input
                    className = "task-input"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder= "Type new task title..."
                />
                <input
                    className = "task-button"
                    type="submit"
                    value="Add task"
                />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTask: (task) => {
            dispatch(addTask(task));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTask);