import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Заполните поле';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Заполните поле';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Неправильный email';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Заполните поле';
    }
    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Заполните поле';
    }
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Пароли не совпадают';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}