import React from 'react'
import classnames from "classnames";
import PropTypes from "prop-types";

const RadioButtonsStatusUser = ({field_1, field_2, active_1, active_2, handleChangeAnswer, error, type, onChange, checkUserExists}) => {
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className={classnames("btn btn-primary", {'active': active_1})}>
                <input
                    type="radio"
                    name="options"
                    id="option1"
                    value="student"
                    onChange={handleChange}
                    autoComplete="off"
                    checked=""/>
                {field_1}
            </label>
            <label className={classnames("btn btn-primary", {'active': active_2})}>
                <input
                    type="radio"
                    name="options"
                    id="option2"
                    value="teacher"
                    onChange={handleChange}
                    autoComplete="off"
                    onChange={handleChangeAnswer}/>
                {field_2}
            </label>
        </div>
    );
}

TextFieldGroup.propTypes = {
    field_1: PropTypes.string.isRequired,
    field_2: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checkUserExists: PropTypes.func
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default RadioButtonsStatusUser;