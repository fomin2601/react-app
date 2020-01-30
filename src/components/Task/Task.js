import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {getProblem} from "../../actions/getProblem";


const Task = ({id_not_useParams, handleChangeAnswer, handleFormSubmit}) => {
    let {id_task} = useParams();
    if (id_task === undefined) {
        id_task = id_not_useParams
    };
    const [body, setBody] = useState(null);
    const [answer_1, setAnswer_1] = useState(null);
    const [answer_2, setAnswer_2] = useState(null);
    const [answer_3, setAnswer_3] = useState(null);
    const [answer_4, setAnswer_4] = useState(null);
    const [answerTask, setAnswerTask] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProblem(id_task)).then(res => {
            setBody(res.data.body);
            setAnswer_1(res.data.answer_1);
            setAnswer_2(res.data.answer_2);
            setAnswer_3(res.data.answer_3);
            setAnswer_4(res.data.answer_4);
            console.log(res.data);
        })
    }, []);

    /*const handleChangeAnswer = e => {
        setAnswerTask(e.target.value);
    };*/


    return (
        <div className="card border-secondary mb-3">
            <div className="card-header">Вопрос {id_task}.</div>
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
            <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name={"answer_" + id_not_useParams}
                                value="answer_1"
                                /*checked={selectedAnswer === "1"}*/
                                onChange={handleChangeAnswer}
                                className="form-check-input"
                            />
                            {answer_1}
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name={"answer_" + id_not_useParams}
                                value="answer_2"
                                /*checked={selectedAnswer === "2"}*/
                                onChange={handleChangeAnswer}
                                className="form-check-input"
                            />
                            {answer_2}
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name={"answer_" + id_not_useParams}
                                value="answer_3"
                                /*checked={selectedAnswer === "3"}*/
                                onChange={handleChangeAnswer}
                                className="form-check-input"
                            />
                            {answer_3}
                        </label>
                    </div>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name={"answer_" + id_not_useParams}
                                value="answer_4"
                                /*checked={selectedAnswer === "4"}*/
                                onChange={handleChangeAnswer}
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

/*Task.propTypes = {
    handleOptionChange: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
};*/

export default Task;