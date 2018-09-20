import React, {Component} from 'react';

class AddNote extends Component {
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
        console.log("AddNote", this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    New Task:
                    <textarea
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Add note" />
            </form>
        );
    }
}

export default AddNote;