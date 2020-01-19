import React from 'react'
import PropTypes from "prop-types";
import validateInput from '../../shared/validations/signup';
import TextFieldGroup from "../common/TextFieldGroup";
import history from '../../history'


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);

        if (!isValid) {
            this.setState({errors})
        }

        return isValid;
    }

    checkUserExists(e) {
        const field = e.target.name;
        const val = e.target.value;
        if (val !== '') {
            this.props.isUserExists(val).then(res => {
                let errors = this.state.errors;
                let invalid;
                if (res.data.user) {
                    errors[field] = 'Другой пользователь уже есть с таким полем: ' + field;
                    invalid = true;
                } else {
                    errors[field] = '';
                    invalid = false;
                }
                this.setState({errors, invalid})

            });
        }
    }


    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'Вы вошли в систему, поздравляем!'
                    })
                    history.push('/')
                },
                ({data}) => this.setState({errors: data, isLoading: false})
            );
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Присоединяйся к нам!</h1>

                <TextFieldGroup
                    error={errors.username}
                    label="Имя пользователя"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.username}
                    field="username"
                />

                <TextFieldGroup
                    error={errors.email}
                    label="Почта"
                    checkUserExists={this.checkUserExists}
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                />

                <TextFieldGroup
                    error={errors.password}
                    label="Пароль"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                />

                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Повтор пароля"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                />

                <div className="form-group">
                    <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">Зарегистрироваться</button>

                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

export default SignupForm;