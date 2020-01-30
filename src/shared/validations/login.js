import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.mail)) {
        errors.identifier = 'Заполните поле';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Заполните поле';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}