import React from 'react'
import PropTypes from "prop-types";
import validateInput from '../../shared/validations/signup';
import TextFieldGroup from "../common/TextFieldGroup";
import history from '../../history'
import classnames from "classnames";


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            second_name: '',
            third_name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            status: 'student',
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
                    errors[field] = 'Такая почта уже есть в системе!';
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
                    });
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
                    error={errors.third_name}
                    label="Фамилия"
                    onChange={this.onChange}
                    value={this.state.third_name}
                    field="third_name"
                />

                <TextFieldGroup
                    error={errors.name}
                    label="Имя"
                    onChange={this.onChange}
                    value={this.state.name}
                    field="name"
                />

                <TextFieldGroup
                    error={errors.second_name}
                    label="Отчество"
                    onChange={this.onChange}
                    value={this.state.second_name}
                    field="second_name"
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
                    type={"password"}
                    error={errors.password}
                    label="Пароль"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                />

                <TextFieldGroup
                    type={"password"}
                    error={errors.passwordConfirmation}
                    label="Повтор пароля"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                />

                <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{display: 'flex', justifyContent: 'center'}}>
                    <label className={classnames("btn btn-primary", {'active': (this.state.status === "student")})}>
                        <input
                            value="student"
                            onChange={this.onChange}
                            type="radio"
                            name="status"
                            id="option1"
                            autoComplete="off"
                            checked=""/>
                        Студент
                    </label>
                    <label className={classnames("btn btn-primary", {'active': (this.state.status === "teacher")})}>
                        <input
                            value="teacher"
                            onChange={this.onChange}
                            type="radio"
                            name="status"
                            id="option2"
                            autoComplete="off"/>
                        Преподаватель
                    </label>
                </div>
                <br/>

                <div className="form-group">
                    <button disabled={this.state.isLoading || this.state.invalid}
                            className="btn btn-primary btn-lg btn-block">Зарегистрироваться</button>

                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
};

export default SignupForm;