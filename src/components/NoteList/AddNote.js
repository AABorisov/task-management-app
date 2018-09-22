import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions';

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
        this.props.addNote(this.state.value);
        this.setState({
            value : ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder= "Type new note..."
                />
                <input type="submit" value="Add note" />
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addNote: (task) => {
            dispatch(addNote(task));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNote);