import React, {Component} from 'react';

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
        console.log("addTask", this.state.value);
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
                    placeholder= "Type New Task Title"
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

export default AddTask;