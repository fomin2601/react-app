import React, {useEffect, useState} from "react";

import Task from "../../components/Task";
import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import {getTest, checkTest} from "../../actions/getTest";
import TestResultTable from "../../components/TestResultTable";
import validateInput from "../../shared/validations/test";
import TimerCard from "../../components/TimerCard";

import './Test.scss'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Test = () => {
    let {id_test} = useParams();
    const [tasks, setTasks] = useState(null);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [errors, setErrors] = useState({});
    const [viewResult, setViewResult] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTest(id_test)).then(res => {
            console.log(res.data);
            setTasks(res.data.problems);
            res.data.problems.split("|").map((id) => answers["answer_" + id] = '');
        })
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        /*await sleep(500);
        alert(JSON.stringify({answers}, null,2));*/
        if (isValid()) {
            dispatch(checkTest(answers)).then(res => {
                console.log('отправил ответы');
                setResult(res.data);
                console.log(res.data, 'result python')
            })
        }
    };

    const handleChangeAnswer = e => {
        if (!result) {
            answers[e.target.name] = e.target.value;
            setAnswers(answers => ({...answers, ...answers}));
        }
    };

    const isValid = () => {
        const {errors, isValid} = validateInput(answers);

        if (!isValid) {
            setErrors(errors)
        } else {
            setErrors({})
        }

        return isValid;
    };


    return (
        <div className="Test">
            <h2>Тест {id_test}</h2>
            <div className={"PageLayout-Content"}>
                <div className={"PageLayout-Left"}>
                    {tasks && tasks.split('|').map((id, index) =>

                        <Task key={id}
                              number={index + 1}
                              id_not_useParams={id}
                              handleFormSubmit={handleSubmit}
                              handleChangeAnswer={handleChangeAnswer}
                              errors={errors["answer_" + id]}
                              viewResult={result && result[id]}
                        />
                    )}

                </div>
                <div className={"PageLayout-Right"}>
                    <TimerCard durationTimer={3600} completeTasks={0} quantityTasks={3}/>
                </div>
                {result === null &&
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Проверить</button>}
                {result !== null && <TestResultTable resultTest={result} answers={answers}/>}
            </div>

        </div>
    );
};

export default Test;