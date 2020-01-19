import React from 'react';
import TextFieldGroup from "../common/TextFieldGroup";
import validateInput from "../../shared/validations/login";
import { connect } from 'react-redux';
import {getAuthErrors} from '../../actions/authActions';
import history from "../../history";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: '',
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.getAuthErrors(this.state).then(res => {
                if (res.errors !== null) {
                    this.setState(res);
                    this.setState({isLoading: false});
                } else {
                    history.push('/');
                }
            });


        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors, identifier, password, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Вход</h1>

                { errors.form && <div className="alert alert-danger">{errors.form}</div> }

                <TextFieldGroup
                    label={"Почта"}
                    onChange={this.onChange}
                    field={"identifier"}
                    value={identifier}
                    error={errors.identifier}
                />

                <TextFieldGroup
                    label={"Пароль"}
                    onChange={this.onChange}
                    field={"password"}
                    value={password}
                    error={errors.password}
                />

                <div className={"form-group"}>
                    <button className={"btn btn-primary btn-lg"} disabled={isLoading}>Войти</button>
                </div>

            </form>
        );
    }
}

LoginForm.propTypes = {
    getAuthErrors: PropTypes.func.isRequired
}

export default connect(null, {getAuthErrors})(LoginForm);