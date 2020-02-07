import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {getProblem} from "../../actions/getProblem";
import classnames from "classnames";


const Task = ({number, id_not_useParams, handleChangeAnswer, handleFormSubmit, errors, viewResult}) => {
    let {id_task} = useParams();
    if (id_task === undefined) {
        id_task = id_not_useParams
    };
    const [body, setBody] = useState(null);
    const [type_question, setType_question] = useState(null);
    const [answer_1, setAnswer_1] = useState(null);
    const [answer_2, setAnswer_2] = useState(null);
    const [answer_3, setAnswer_3] = useState(null);
    const [answer_4, setAnswer_4] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProblem(id_task)).then(res => {
            setBody(res.data.body);
            setType_question(res.data.type_question);
            setAnswer_1(res.data.answer_1);
            setAnswer_2(res.data.answer_2);
            setAnswer_3(res.data.answer_3);
            setAnswer_4(res.data.answer_4);
        })
    }, []);


    return (

        <div className={classnames("card mb-3", {"border-danger": viewResult === false}, {"border-success": viewResult === true})}>
            <div className="card-header">Вопрос {number}.</div>
            <div className="card-body">
                <a name={"task_" + id_task}></a>
                <p className="card-text">{body}</p>
            </div>

            {type_question === 1 && <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name={"answer_" + id_not_useParams}
                                value="1"
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
                                value="2"
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
                                value="3"
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
                                value="4"
                                onChange={handleChangeAnswer}
                                className="form-check-input"
                            />
                            {answer_4}
                        </label>
                    </div>
                </form>
            </div>}
            {type_question === 2 && <div className="container">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Введите ответ"
                            name={"answer_" + id_not_useParams}
                            onChange={handleChangeAnswer}/>

                    </div>
                </form>
            </div>}
            { errors && <div className="alert alert-danger">{errors}</div> }

        </div>
)
};

export default Task;