import React from 'react';
import {connect} from 'react-redux';
import TextFieldGroup from "../common/TextFieldGroup";
import {createEvent} from "../../actions/eventActions";

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    render() {
        const {title, errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>NewEvent</h1>

                <TextFieldGroup
                    name={"title"}
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                />

                <button type={"submit"} className={"btn btn-primary"}>Отправить</button>
            </form>
        );
    }
}

export default connect(null, {createEvent})(EventForm);