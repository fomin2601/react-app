import React, {useState} from "react";
import {useParams} from "react-router";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getProblem} from "../../actions/getProblem";

const Task = ({body, answer_1, answer_2, answer_3, answer_4, selectedOption, handleOptionChange, handleFormSubmit}) => {
    let {id} = useParams();

    return (
        <div className="card border-secondary mb-3">
            <div className="card-header">Вопрос {id}.</div>
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option1"
                                checked={selectedOption === "option1"}
                                onChange={handleOptionChange}
                                className="form-check-input"
                            />
                            {answer_1}
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option2"
                                checked={selectedOption === "option2"}
                                onChange={handleOptionChange}
                                className="form-check-input"
                            />
                            {answer_2}
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option3"
                                checked={selectedOption === "option3"}
                                onChange={handleOptionChange}
                                className="form-check-input"
                            />
                            {answer_3}
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="option4"
                                checked={selectedOption === "option4"}
                                onChange={handleOptionChange}
                                className="form-check-input"
                            />
                            {answer_4}
                        </label>
                    </div>
                </form>
            </div>
        </div>
)
};

Task.propTypes = {
    body: PropTypes.string.isRequired,
    answer_1: PropTypes.string,
    answer_2: PropTypes.string,
    answer_3: PropTypes.string,
    answer_4: PropTypes.string,
    handleOptionChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
};

Task.defaultProps = {
    selectedOption: ''
};

export default connect(null, {getProblem})(Task);