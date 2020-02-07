import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import React from "react";

export default function validateInput(answers) {
    let errors = {};

    Object.keys(answers).map((key) => {
            if (Validator.isEmpty(answers[key])) {
                errors[key] = 'Нет ответа на вопрос';
            }
        });

    return {
        errors,
        isValid: isEmpty(errors)
    }
}