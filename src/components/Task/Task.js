import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {getProblem} from "../../actions/getProblem";


const Task = ({selectedOption, handleFormSubmit}) => {
    let {id} = useParams();
    const [body, setBody] = useState(null);
    const [answer_1, setAnswer_1] = useState(null);
    const [answer_2, setAnswer_2] = useState(null);
    const [answer_3, setAnswer_3] = useState(null);
    const [answer_4, setAnswer_4] = useState(null);
    const [changeState, setChangeState] = useState({selectedOption});


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProblem(id)).then(res => {
            setBody(res.data.body);
            setAnswer_1(res.data.answer0);
            setAnswer_2(res.data.answer1);
            setAnswer_3(res.data.answer2);
            setAnswer_4(res.data.answer3);
            console.log(res.data);
        })
    }, []);

    const handleOptionChange = changeEvent => {
        setChangeState({
            selectedOption: changeEvent.target.value
        });
    };

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
    handleOptionChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
};

export default Task;